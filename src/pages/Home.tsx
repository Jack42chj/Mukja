import styled from "styled-components";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Item from "../components/Item";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
`;

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <SearchBox />
            <Item />
            <Item />
            <Item />
            <Item />
        </Wrapper>
    );
};

export default Home;
