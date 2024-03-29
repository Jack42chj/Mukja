import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import SearchBox from "../components/SearchBox";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import TabBar from "../components/TabBar";
import { supabase } from "../supabase/supabase";
import { useEffect, useState } from "react";
import LocStore from "../zustand/store";
import { ListProps } from "../interface/item-interface";
import ListSkeleton from "../components/ListSkeleton";

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
    const [isLoading, setLoading] = useState(false);
    const [listData, setListData] = useState<ListProps[]>([]);
    const { address } = LocStore();
    const getListData = async () => {
        try {
            const { data, error } = await supabase
                .from("matzip")
                .select(
                    `id, name, category, address, score, like, review_cnt, image`
                )
                .ilike("address", `%${address}%`);
            if (error) {
                console.error(error);
                return;
            }
            if (data) {
                setListData(data);
            }
        } catch (err: unknown) {
            alert("데이터 불러오기 실패!");
        }
    };
    useEffect(() => {
        getListData();
        setTimeout(() => {
            setLoading(true);
        }, 800);
    }, []);
    return (
        <>
            <MainHeader />
            <Wrapper>
                <Container>
                    <SearchBox />
                    <Filter />
                </Container>
                <ItemContainer>
                    {!isLoading
                        ? listData.map((_, index) => (
                              <ListSkeleton key={index} />
                          ))
                        : listData.map((item) => (
                              <ListItem item={item} key={item.id} />
                          ))}
                </ItemContainer>
            </Wrapper>
            <TabBar />
        </>
    );
};

export default Home;
