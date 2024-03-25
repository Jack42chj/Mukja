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
    &.back {
        cursor: pointer;
    }
    &.name {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 18px;
    }
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
`;

const UserHeader = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Item className="back" onClick={() => navigate(-1)}>
                    <img
                        alt="chevron-left-icon"
                        src="/svg/chevron-left.svg"
                        height="24"
                        width="auto"
                    />
                </Item>
                <Item className="name">마이머스트</Item>
            </Container>
        </Wrapper>
    );
};

export default UserHeader;
