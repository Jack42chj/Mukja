import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import SearchInput from "../components/SearchInput";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { ListProps } from "../interface/item-interface";

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
    const [listData, setListData] = useState<ListProps[]>([]);
    const getListData = async () => {
        try {
            const { data, error } = await supabase
                .from("matzip")
                .select(
                    `id, name, category, address, score, like, review_cnt, image`
                )
                .or(
                    `name.ilike.%${keyword}%, tag.ilike.%${keyword}%, address.ilike.%${keyword}%`
                );
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
    }, [keyword]);
    return (
        <>
            <MainHeader />
            <Wrapper>
                <SearchInput />
                <Container>
                    <Result>
                        "{keyword}" {listData.length}개
                    </Result>
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
        </>
    );
};

export default SearchResult;
