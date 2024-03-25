import { useState } from "react";
import styled from "styled-components";

interface OptionProps {
    selected: boolean;
    onClick: () => void;
}

const filter_list = [
    { name: "거리순", value: "distance" },
    { name: "인기순", value: "popular" },
    { name: "리뷰순", value: "review_cnt" },
    { name: "좋아요순", value: "favorite" },
];

const SelectBox = styled.div`
    cursor: pointer;
    position: relative;
    width: 20%;
    display: flex;
    justify-content: center;
    outline: none;
    background: #ffffff;
    border: none;
    margin-right: 20px;
`;

const SelectLabel = styled.label`
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Select = styled.ul`
    z-index: 2;
    position: absolute;
    top: 60px;
    list-style: none;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    width: 110%;
`;

const Option = styled.li<OptionProps>`
    font-size: 1rem;
    padding: 12px 16px;
    color: ${(props) => (props.selected ? "#ff005c" : "inherit")};
    &:hover {
        color: #ff005c;
    }
`;

const Filter = () => {
    const [currValue, setCurrValue] = useState("거리순");
    const [showOptions, setShowOptions] = useState(false);
    const onChangeSelect = async (value: string) => {
        setCurrValue(value);
    };
    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <SelectLabel>
                {currValue}
                <img
                    alt="chevron-down-icon"
                    src="/svg/chevron-down.svg"
                    height="20"
                    width="auto"
                />
            </SelectLabel>
            <Select style={{ display: showOptions ? "block" : "none" }}>
                {filter_list.map((item) => (
                    <Option
                        selected={currValue === item.name}
                        value={item.value}
                        onClick={() => onChangeSelect(item.name)}
                        key={item.value}
                    >
                        {item.name}
                    </Option>
                ))}
            </Select>
        </SelectBox>
    );
};

export default Filter;
