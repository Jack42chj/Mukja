import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";
import KeywordTag from "../components/KeywordTag";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 50px;
    padding: 0px 20px;
`;

const Typography = styled.div`
    padding: 0px 25px;
    font-size: 1.5rem;
    font-weight: bold;
    &.keyword {
        font-size: 1rem;
        font-weight: normal;
    }
`;

const Search = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Header onClick={() => navigate("/")}>
                <img
                    alt="chevron-left-icon"
                    src="/svg/chevron-left.svg"
                    height="20"
                    width="auto"
                />
            </Header>
            <Typography>무엇이 먹고 싶나요?</Typography>
            <SearchInput />
            <Typography className="keyword">인기 검색어</Typography>
            <KeywordTag />
        </Wrapper>
    );
};

export default Search;
