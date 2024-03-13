import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    margin: 24px 0px;
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
`;

const ItemImage = styled.div`
    height: 160px;
    width: 100%;
    background-color: #d9d9d9;
    border: none;
    border-radius: 10px;
`;

const Subtitle = styled.div`
    font-size: 0.8rem;
    .sub {
        color: #696969;
    }
`;

const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const Item = () => {
    return (
        <Box>
            <Wrapper>
                <ItemImage>
                    <img
                        alt="heart-icon"
                        src="/svg/heart.svg"
                        height="20"
                        width="auto"
                    />
                </ItemImage>
                <Subtitle>태권도</Subtitle>
                <Title>치킨플러스 월계점</Title>
                <Subtitle>서울시 노원구 월계동 0.8km</Subtitle>
            </Wrapper>
        </Box>
    );
};

export default Item;
