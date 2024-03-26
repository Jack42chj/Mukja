import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import KeywordTag from "../components/KeywordTag";
import SearchHeader from "../components/header/SearchHeader";
import TabBar from "../components/TabBar";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
`;

const Typography = styled.div`
    padding: 0px 25px;
    font-size: 1.7rem;
    font-weight: bold;
    &.keyword {
        font-size: 1rem;
        font-weight: normal;
    }
    margin-top: 20px;
`;

const Search = () => {
    return (
        <>
            <SearchHeader />
            <Wrapper>
                <Typography>어느 맛집을 가볼까요?</Typography>
                <SearchInput />
                <Typography className="keyword">인기 검색어</Typography>
                <KeywordTag />
            </Wrapper>
            <TabBar />
        </>
    );
};

export default Search;
