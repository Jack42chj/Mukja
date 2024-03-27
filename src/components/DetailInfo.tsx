import styled from "styled-components";
import StarList from "./StarList";

interface detailDataProps {
    detailList: {
        id: string;
        name: string;
        address: string;
        description: string;
        phnum: string;
        score: number;
        like: number;
        review_cnt: number;
        image: string;
    };
}

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

const ImageItem = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    width: 100px;
    height: 100px;
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
    &.content {
        font-weight: normal;
        line-height: 1.5;
    }
`;

const ReviewText = styled.div`
    cursor: pointer;
    color: #6892ff;
    font-weight: bold;
`;

const dummy_data = {
    time: {
        week: ["15:20", "01:20"],
        weekend: ["15:20", "01:20"],
        break: "연중무휴",
    },
    review_list: [
        {
            name: "닭고치",
            created: "3달전",
            score: 5,
            content:
                "도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요!",
        },
        {
            name: "반반무마니",
            created: "4달전",
            score: 4,
            content:
                "도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요!",
        },
        {
            name: "닭",
            created: "3달전",
            score: 3,
            content:
                "도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요!",
        },
        {
            name: "닭꼬치",
            created: "3달전",
            score: 2,
            content:
                "도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요!",
        },
        {
            name: "닭길치",
            created: "3달전",
            score: 1,
            content:
                "도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요! 도장이 너무 좋아요. 시설도 깔끔하고 무엇보다 관장님이 너무 좋으세요!",
        },
    ],
};

const DetailInfo: React.FC<detailDataProps> = ({ detailList }) => {
    return (
        <Wrapper>
            <ItemContainer>
                <DescText className="desc">{detailList.description}</DescText>
                <DescText className="title">{detailList.name}</DescText>
                <DescText className="sub">{detailList.address}</DescText>
                <DescText className="review">
                    <img
                        alt="star-icon"
                        src="/svg/star.svg"
                        height="24px"
                        width="auto"
                    />
                    {detailList.score} ({detailList.review_cnt})
                    <img
                        alt="red-heart-icon"
                        src="/svg/red-heart.svg"
                        height="16px"
                        width="auto"
                    />
                    {detailList.like}
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
                <DescText className="sub">{detailList.phnum}</DescText>
            </ItemContainer>
            <ItemContainer>
                <DescText>사진</DescText>
                <ImageContainer>
                    <ImageItem url={detailList.image}>1</ImageItem>
                    <ImageItem url={detailList.image}>2</ImageItem>
                    <ImageItem url={detailList.image}>3</ImageItem>
                    <ImageItem url={detailList.image}>4</ImageItem>
                    <ImageItem url={detailList.image}>5</ImageItem>
                    <ImageItem url={detailList.image}>6</ImageItem>
                </ImageContainer>
            </ItemContainer>
            <ItemContainer>
                <DescText>
                    후기{" "}
                    <DescText className="sub">
                        {detailList.review_cnt}개 리뷰
                    </DescText>
                </DescText>
            </ItemContainer>
            {dummy_data.review_list.map((review) => (
                <ItemContainer key={review.name}>
                    <DescText>
                        {review.name}{" "}
                        <DescText className="sub">{review.created}</DescText>
                    </DescText>
                    <DescText>
                        <StarList score={review.score} />
                        {review.score}.0
                    </DescText>
                    <DescText className="content">{review.content}</DescText>
                </ItemContainer>
            ))}
        </Wrapper>
    );
};

export default DetailInfo;
