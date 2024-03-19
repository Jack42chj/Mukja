import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import SearchInput from "../components/SearchInput";
import { useLocation } from "react-router-dom";

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

const SearchResult = () => {
    const keyword = useLocation().state;
    return (
        <>
            <MainHeader />
            <Wrapper>
                <SearchInput />
                <Container>
                    <Result>"{keyword}" 981개</Result>
                    <Filter />
                </Container>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </Wrapper>
        </>
    );
};

export default SearchResult;
