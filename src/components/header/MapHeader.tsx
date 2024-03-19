import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d9d9d9;
`;

const Container = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    padding: 0px 20px;
    position: sticky;
    top: 0px;
`;

const Item = styled.div`
    cursor: pointer;
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

const MapHeader = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Item className="back" onClick={() => navigate("/")}>
                    <img
                        alt="chevron-left-icon"
                        src="/svg/chevron-left.svg"
                        height="20"
                        width="auto"
                    />
                </Item>
                <Item className="name">지도에서 위치 설정</Item>
            </Container>
        </Wrapper>
    );
};

export default MapHeader;
