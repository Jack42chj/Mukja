import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    padding: 0px 20px;
`;

const Item = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const SearchHeader = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Item onClick={() => navigate(-1)}>
                    <img
                        alt="chevron-left-icon"
                        src="/svg/chevron-left.svg"
                        height="24"
                        width="auto"
                    />
                </Item>
            </Container>
        </Wrapper>
    );
};

export default SearchHeader;
