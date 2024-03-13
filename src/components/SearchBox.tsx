import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 10px 20px;
    padding: 15px 15px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SearchBox = () => {
    const navigate = useNavigate();
    return (
        <Bar onClick={() => navigate("/search")}>
            지역이나 음식을 검색해보세요
            <img
                alt="search-icon"
                src="/svg/search.svg"
                height="20"
                width="auto"
            />
        </Bar>
    );
};

export default SearchBox;
