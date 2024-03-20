import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";

const Wrapper = styled.div`
    max-width: 768px;
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 225px;
    background-color: #d9d9d9;
    @media (min-width: 628px) {
        height: 448px;
    }
`;

const SliderCount = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000000;
    opacity: 0.6;
    padding: 6px 12px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 0.8rem;
`;

const HeartIcon = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    background-color: #000000;
    opacity: 0.6;
    padding: 12px 12px;
    border-radius: 100%;
    &:hover {
        opacity: 0.2;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ItemWrapper = styled.div`
    padding: 20px 20px;
    border-bottom: 1px solid #d9d9d9;
`;

const Detail = () => {
    return (
        <>
            <DetailHeader />
            <Wrapper>
                <ImageWrapper>
                    <SliderCount>1 / 5</SliderCount>
                    <HeartIcon>
                        <img
                            alt="heart-icon"
                            src="/svg/white-heart.svg"
                            height="20"
                            width="auto"
                        />
                    </HeartIcon>
                </ImageWrapper>
                <Container>
                    <ItemWrapper>가게 설명</ItemWrapper>
                    <ItemWrapper>가게 소개</ItemWrapper>
                    <ItemWrapper>운영 시간</ItemWrapper>
                    <ItemWrapper>전화 문의</ItemWrapper>
                    <ItemWrapper>사진</ItemWrapper>
                    <ItemWrapper>평점/후기</ItemWrapper>
                    <ItemWrapper>리뷰</ItemWrapper>
                </Container>
            </Wrapper>
        </>
    );
};

export default Detail;
