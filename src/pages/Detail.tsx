import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/DetailInfo";

const Wrapper = styled.div`
    max-width: 768px;
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
    padding: 10px 10px;
    border-radius: 100%;
    &:hover {
        opacity: 0.5;
    }
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
                <DetailInfo />
            </Wrapper>
        </>
    );
};

export default Detail;
