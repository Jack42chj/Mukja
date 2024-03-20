import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import SearchBox from "../components/SearchBox";
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import TabBar from "../components/TabBar";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
`;

const Container = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    min-height: 100vh;
`;

const Home = () => {
    return (
        <>
            <MainHeader />
            <Wrapper>
                <Container>
                    <SearchBox />
                    <Filter />
                </Container>
                <ItemContainer>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </ItemContainer>
            </Wrapper>
            <TabBar />
        </>
    );
};

export default Home;
