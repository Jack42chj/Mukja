import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
`;

const Wrapper = styled.div`
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

const ItemImage = styled.div`
    height: 180px;
    width: 100%;
    background-color: #d9d9d9;
    border: none;
    border-radius: 10px;
    @media (min-width: 426px) {
        height: 224px;
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
    height: 0.8rem;
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 60%;
    &.sub {
        width: 10%;
    }
    display: flex;
    align-items: center;
    gap: 2px;
`;

const Title = styled.div`
    height: 1rem;
    width: 40%;
    background-color: #d9d9d9;
    border-radius: 20px;
`;

const DetailText = styled.div`
    position: absolute;
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 20%;
    height: 0.8rem;
    bottom: 5px;
    right: 0;
    display: none;
    @media (min-width: 426px) {
        display: block;
    }
`;

const ListSkeleton = () => {
    return (
        <Box>
            <Wrapper>
                <ItemImage />
                <DescWrapper>
                    <Subtitle className="sub" />
                    <Title />
                    <Subtitle />
                    <DetailText />
                </DescWrapper>
            </Wrapper>
        </Box>
    );
};

export default ListSkeleton;
