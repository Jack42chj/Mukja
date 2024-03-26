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
    const [listData, setListData] = useState<ListProps[]>([]);
    const { address } = LocStore();
    const getListData = async () => {
        try {
            const { data, error } = await supabase
                .from("matZip")
                .select(
                    `id, name, category, address, score, favorite_cnt, review_cnt, image`
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
            alert("영상 데이터 불러오기 실패!");
        }
    };
    useEffect(() => {
        getListData();
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
                    {listData.length ? (
                        listData.map((item) => (
                            <ListItem item={item} key={item.id} />
                        ))
                    ) : (
                        <div>404</div>
                    )}
                </ItemContainer>
            </Wrapper>
            <TabBar />
        </>
    );
};

export default Home;
