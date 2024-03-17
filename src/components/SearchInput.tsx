import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        cursor: pointer;
        position: absolute;
        right: 36px;
    }
`;

const Input = styled.input`
    cursor: pointer;
    font-size: 1rem;
    font-family: "Pretendard";
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 20px 20px;
    padding: 15px 15px;
    background-color: transparent;
    width: 100%;
    outline: none;
    border-radius: 10px;
    &:focus {
        border: 1px solid #065fd4;
    }
`;

const SearchInput = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
        navigate(`/search-result/${keyword}`);
    };
    const onClickIcon = () => {
        if (keyword === "") return;
        navigate(`/search-result/${keyword}`);
    };
    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                onChange={onChange}
                placeholder="지역이나 음식을 검색해보세요"
                type="text"
                value={keyword}
            />
            <img
                alt="search-icon"
                src="/svg/search.svg"
                height="20"
                width="auto"
                onClick={onClickIcon}
            />
        </SearchForm>
    );
};

export default SearchInput;
