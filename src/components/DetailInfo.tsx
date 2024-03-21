import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ItemContainer = styled.div`
    padding: 20px 20px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const TimeDivider = styled.div`
    display: flex;
    gap: 36px;
`;

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

const ImageItem = styled.div`
    width: 100px;
    height: 100px;
    background-color: #d9d9d9;
    border-radius: 10px;
    @media (min-width: 496px) {
        width: 148px;
        height: 148px;
    }
    @media (min-width: 741px) {
        width: 229px;
        height: 229px;
    }
`;

const DescText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: bold;
    &.title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    &.sub {
        font-size: 0.9rem;
        font-weight: normal;
    }
    &.desc {
        font-size: 0.9rem;
        color: #ff005c;
    }
    &.review {
        font-weight: bold;
        font-size: 0.9rem;
    }
`;

const ReviewText = styled.div`
    cursor: pointer;
    color: #6892ff;
    font-weight: bold;
`;

const dummy_data = {
    title: "치킨플러스 월계점",
    address: "서울 노원구 석계로13길 35 세양청마루아파트 상가동 1층 101호",
    description: "후라이드 치킨과 양념치킨이 정말 맛있는 집!",
    score: 4.9,
    review: 90,
    favorite: 189,
    time: {
        week: ["15:20", "01:20"],
        weekend: ["15:20", "01:20"],
        break: "연중무휴",
    },
    phone: "0507-1303-0443",
};

const DetailInfo = () => {
    return (
        <Wrapper>
            <ItemContainer>
                <DescText className="desc">{dummy_data.description}</DescText>
                <DescText className="title">{dummy_data.title}</DescText>
                <DescText className="sub">{dummy_data.address}</DescText>
                <DescText className="review">
                    <img
                        alt="star-icon"
                        src="/svg/star.svg"
                        height="24px"
                        width="auto"
                    />
                    {dummy_data.score} ({dummy_data.review})
                    <img
                        alt="red-heart-icon"
                        src="/svg/red-heart.svg"
                        height="16px"
                        width="auto"
                    />
                    {dummy_data.favorite}
                    <ReviewText>리뷰 보기</ReviewText>
                </DescText>
            </ItemContainer>
            <ItemContainer>
                <DescText>운영 시간</DescText>
                <TimeDivider>
                    <DescText className="sub">평일</DescText>
                    <DescText className="sub">
                        {dummy_data.time.week[0]} ~ {dummy_data.time.week[1]}
                    </DescText>
                </TimeDivider>
                <TimeDivider>
                    <DescText className="sub">주말</DescText>
                    <DescText className="sub">
                        {dummy_data.time.weekend[0]} ~{" "}
                        {dummy_data.time.weekend[1]}
                    </DescText>
                </TimeDivider>
                <TimeDivider>
                    <DescText className="sub">휴무일</DescText>
                    <DescText className="sub">{dummy_data.time.break}</DescText>
                </TimeDivider>
            </ItemContainer>
            <ItemContainer>
                <DescText>전화 문의</DescText>
                <DescText className="sub">{dummy_data.phone}</DescText>
            </ItemContainer>
            <ItemContainer>
                <DescText>사진</DescText>
                <ImageContainer>
                    <ImageItem>1</ImageItem>
                    <ImageItem>2</ImageItem>
                    <ImageItem>3</ImageItem>
                    <ImageItem>4</ImageItem>
                    <ImageItem>5</ImageItem>
                    <ImageItem>6</ImageItem>
                </ImageContainer>
            </ItemContainer>
            <ItemContainer>
                <DescText>후기</DescText>
            </ItemContainer>
        </Wrapper>
    );
};

export default DetailInfo;
