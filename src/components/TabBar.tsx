import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

interface ItemProps {
    $active: boolean;
}

const pathList = [
    {
        path: "/",
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>
        ),
        name: "홈",
    },
    {
        path: "/search",
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
        ),
        name: "검색",
    },
    {
        path: "/favorite",
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        ),
        name: "찜",
    },
    {
        path: "/not",
        alt: "not-icon",
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        name: "미정",
    },
    {
        path: "/user/1",
        src: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
            </svg>
        ),
        name: "My 머스트",
    },
];

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-top: 1px solid #d9d9d9;
    position: fixed;
    bottom: 0;
`;

const Container = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    height: 55px;
    padding: 0px 20px;
`;

const Item = styled.div<ItemProps>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    font-size: 0.8rem;
    color: ${(props) => (props.$active ? "#ff005c" : "#a0a0a0")};
    svg {
        height: 24px;
        width: auto;
        color: ${(props) => (props.$active ? "#ff005c" : "#a0a0a0")};
    }
    &:hover {
        color: #ff005c;
        svg {
            color: #ff005c;
        }
    }
`;

const TabBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
        navigate(path);
    };

    return (
        <Wrapper>
            <Container>
                {pathList.map((item) => (
                    <Item
                        onClick={() => handleTabClick(`${item.path}`)}
                        $active={activeTab === item.path}
                        key={item.name}
                    >
                        {item.src}
                        {item.name}
                    </Item>
                ))}
            </Container>
        </Wrapper>
    );
};

export default TabBar;
