import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import SearchInput from "../components/SearchInput";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase/supabase";
import { ListProps } from "../interface/item-interface";
import ListSkeleton from "../components/ListSkeleton";
import EmptyItem from "../components/EmptyItem";
import { getDistance } from "../util/distance";
import { useInView } from "react-intersection-observer";
import LocStore from "../zustand/store";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #d9d9d9;
`;

const Result = styled.div`
    font-size: 1rem;
    color: #696969;
    margin-left: 20px;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

const SearchResult = () => {
    const keyword = useLocation().state;
    const { location } = LocStore();
    const [inViewRef, inView] = useInView();
    const [isLoading, setLoading] = useState(false);
    const [nextPage, setNextPage] = useState(true);
    const [list, setList] = useState<ListProps[]>([]);
    const page = useRef(1);

    const getList = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("matzip")
                .select(
                    `id, name, category, address, score, like, review_cnt, image, lng, lat`
                )
                .or(
                    `name.ilike.%${keyword}%, tag.ilike.%${keyword}%, address.ilike.%${keyword}%`
                )
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
        if (inView && nextPage && keyword !== "") {
            getList();
        }
    }, [inView, nextPage, keyword]);

    return (
        <>
            <MainHeader />
            <Wrapper>
                <SearchInput />
                <Container>
                    <Result>"{keyword}" 검색결과</Result>
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
        </>
    );
};

export default SearchResult;
