import styled from "styled-components";

interface StarProps {
    score: number;
}

const StarWrapper = styled.div`
    display: flex;
`;

const StarIcon = () => (
    <img alt="star-icon" src="/svg/star.svg" height="16px" width="auto" />
);

const EmptyStarIcon = () => (
    <img
        alt="empty-star-icon"
        src="/svg/empty-star.svg"
        height="16px"
        width="auto"
    />
);

const StarList: React.FC<StarProps> = ({ score }) => {
    const starIcon = [];
    for (let i = 0; i < score; i++) {
        starIcon.push(<StarIcon key={i} />);
    }
    for (let j = 0; j < 5 - score; j++) {
        starIcon.push(<EmptyStarIcon key={j + score} />);
    }
    return <StarWrapper>{starIcon}</StarWrapper>;
};

export default StarList;
