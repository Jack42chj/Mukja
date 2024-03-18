import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    margin-top: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
`;

const Wrapper = styled.div`
    cursor: pointer;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media (min-width: 628px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
    }
`;

const ItemImage = styled.div`
    height: 180px;
    width: 100%;
    max-width: 390px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 10px;
    position: relative;
    @media (min-width: 628px) {
        height: 224px;
    }
`;

const IconWrapper = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 5px;
    background-color: #000000;
    opacity: 0.7;
    padding: 8px 8px;
    border-radius: 100%;
    &:hover {
        opacity: 0.2;
    }
`;

const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
    position: relative;
    @media (min-width: 628px) {
        margin: 0;
    }
`;

const Subtitle = styled.div`
    font-size: 0.8rem;
    &.sub {
        color: #696969;
    }
    display: flex;
    align-items: center;
    gap: 2px;
`;

const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const DetailText = styled.div`
    position: absolute;
    font-size: 0.8rem;
    color: #696969;
    bottom: 5px;
    right: 0;
    display: none;
    @media (min-width: 628px) {
        display: block;
    }
`;

const ListItem = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Wrapper onClick={() => navigate("/detail")}>
                <ItemImage>
                    <IconWrapper>
                        <img
                            alt="heart-icon"
                            src="/svg/white-heart.svg"
                            height="16"
                            width="auto"
                        />
                    </IconWrapper>
                </ItemImage>
                <DescWrapper>
                    <Subtitle className="sub">치킨</Subtitle>
                    <Title>치킨플러스 월계점</Title>
                    <Subtitle>서울시 노원구 월계동 0.8km</Subtitle>
                    <Subtitle className="sub">
                        <img
                            alt="star-icon"
                            src="/svg/star.svg"
                            height="14"
                            width="auto"
                        />
                        <div>4.8(99)</div>
                        <img
                            alt="heart-icon"
                            src="/svg/heart.svg"
                            height="16"
                            width="auto"
                        />
                        <div>99</div>
                    </Subtitle>
                    <DetailText>상세보기</DetailText>
                </DescWrapper>
            </Wrapper>
        </Box>
    );
};

export default ListItem;
