import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";
import MapSetting from "./pages/MapSetting";
import User from "./pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/map-setting",
        element: <MapSetting />,
    },
    {
        path: "/search-result/:keyword",
        element: <SearchResult />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
    {
        path: "/user/:id",
        element: <User />,
    },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f2f2f2;
    font-family: 'Pretendard';
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    return (
        <Wrapper>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Wrapper>
    );
};

export default App;
