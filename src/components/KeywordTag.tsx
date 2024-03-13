import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const dummy = [
    { name: "핫도그" },
    { name: "피자" },
    { name: "족발" },
    { name: "스시" },
    { name: "치킨" },
    { name: "돈까스" },
    { name: "월계동" },
    { name: "장위동" },
];
const Wrapper = styled.div`
    width: 100%;
    padding: 0px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

const Tag = styled.div`
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    padding: 10px 15px;
`;

const KeywordTag = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            {dummy.map((item) => (
                <Tag
                    key={item.name}
                    onClick={() => navigate(`/search-result/${item.name}`)}
                >
                    {item.name}
                </Tag>
            ))}
        </Wrapper>
    );
};

export default KeywordTag;
