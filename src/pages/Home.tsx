import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import SearchBox from "../components/SearchBox";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import TabBar from "../components/TabBar";
import { supabase } from "../supabase/supabase";
import { useEffect, useRef, useState } from "react";
import LocStore from "../zustand/store";
import { ListProps } from "../interface/item-interface";
import ListSkeleton from "../components/ListSkeleton";
import { calculateRange, getDistance } from "../util/distance";
import EmptyItem from "../components/EmptyItem";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
`;

const Container = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    min-height: 100vh;
`;

const Home = () => {
    const { location } = LocStore();
    const [inViewRef, inView] = useInView();
    const [isLoading, setLoading] = useState(false);
    const [nextPage, setNextPage] = useState(true);
    const [list, setList] = useState<ListProps[]>([]);
    const page = useRef(1);
    const latRange = calculateRange(location[0]);
    const lngRange = calculateRange(location[1]);

    const getList = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("matzip")
                .select(
                    `id, name, category, address, score, like, review_cnt, image, lng, lat`
                )
                .lte("lat", latRange.max)
                .gte("lat", latRange.min)
                .lte("lng", lngRange.max)
                .gte("lng", lngRange.min)
                .order("id")
                .range((page.current - 1) * 3, page.current * 3 - 1);
            if (error) {
                return;
            }
            if (data) {
                const newData = data.map((item) => ({
                    ...item,
                    distance: getDistance(
                        location[0],
                        location[1],
                        item.lat,
                        item.lng
                    ),
                }));
                setList((prev) => [...prev, ...newData]);
                page.current += 1;
                if (data.length === 3) setNextPage(true);
                else setNextPage(false);
            }
        } catch (err: unknown) {
            alert("데이터 불러오기 실패!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inView && nextPage) {
            getList();
        }
    }, [inView, nextPage]);

    return (
        <>
            <MainHeader />
            <Wrapper>
                <Container>
                    <SearchBox />
                    <Filter />
                </Container>
                <ItemContainer>
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <ListSkeleton key={index} />
                        ))
                    ) : list.length !== 0 ? (
                        list.map((item, index) => (
                            <ListItem item={item} key={index} />
                        ))
                    ) : (
                        <EmptyItem />
                    )}
                    <div ref={inViewRef} />
                </ItemContainer>
            </Wrapper>
            <TabBar />
        </>
    );
};

export default Home;
