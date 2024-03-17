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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    position: sticky;
    height: 50px;
    padding: 0px 20px;
    top: 0px;
`;

const Item = styled.div`
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const MainHeader = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Item onClick={() => navigate("/")}>먹깨비</Item>
                <Item onClick={() => navigate("/map-setting")}>
                    노원구 월계동
                    <img
                        alt="chevron-down-icon"
                        src="/svg/chevron-down.svg"
                        height="20"
                        width="auto"
                    />
                </Item>
                <Item>
                    <img
                        alt="user-icon"
                        src="/svg/user.svg"
                        height="20"
                        width="auto"
                    />
                </Item>
            </Container>
        </Wrapper>
    );
};

export default MainHeader;
