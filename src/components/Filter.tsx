import styled from "styled-components";

const Select = styled.select`
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    background: none;
    border: none;
    width: 20%;
    margin-right: 20px;
`;

const Option = styled.option`
    background-color: #ffffff;
    padding: 5px 10px;
`;

const Filter = () => {
    const onChangeSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
    };
    return (
        <Select onChange={onChangeSelect}>
            <Option value="distance">거리순</Option>
            <Option value="polpular">인기순</Option>
            <Option value="review">리뷰순</Option>
            <Option value="like">좋아요순</Option>
        </Select>
    );
};

export default Filter;
