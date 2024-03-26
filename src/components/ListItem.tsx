import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ListProps {
    item: {
        id: string;
        name: string;
        category: string;
        address: string;
        score: number;
        favorite_cnt: number;
        review_cnt: number;
        image: string;
    };
}

const Box = styled.div`
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
`;

const Wrapper = styled.div`
    cursor: pointer;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media (min-width: 426px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
    }
`;

const ItemImage = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    height: 180px;
    width: 100%;
    border: none;
    border-radius: 10px;
    position: relative;
    @media (min-width: 426px) {
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
    opacity: 0.6;
    padding: 8px 8px;
    border-radius: 100%;
    &:hover {
        opacity: 0.2;
    }
`;

const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    position: relative;
    @media (min-width: 426px) {
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
    @media (min-width: 426px) {
        display: block;
    }
`;

const ListItem: React.FC<ListProps> = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Box>
            <Wrapper onClick={() => navigate(`/detail/${item.id}`)}>
                <ItemImage url={item.image}>
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
                    <Subtitle className="sub">{item.category}</Subtitle>
                    <Title>{item.name}</Title>
                    <Subtitle>{item.address}</Subtitle>
                    <Subtitle className="sub">
                        <img
                            alt="star-icon"
                            src="/svg/star.svg"
                            height="16"
                            width="auto"
                        />
                        <div>
                            {item.score}({item.review_cnt})
                        </div>
                        <img
                            alt="heart-icon"
                            src="/svg/red-heart.svg"
                            height="14"
                            width="auto"
                        />
                        <div>{item.favorite_cnt}</div>
                    </Subtitle>
                    <DetailText>상세보기</DetailText>
                </DescWrapper>
            </Wrapper>
        </Box>
    );
};

export default ListItem;
