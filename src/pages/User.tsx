import styled from "styled-components";
import UserHeader from "../components/header/UserHeader";
import TabBar from "../components/TabBar";
import UserItem from "../components/UserItem";
import { useState } from "react";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 20px 0px 20px;
`;

const AuthItem = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 10px;
    font-size: 1.2rem;
`;

const UserInfo = styled.div`
    &.mail {
        font-size: 1rem;
        font-weight: normal;
    }
`;

const AuthBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #ff005c;
    border-radius: 10px;
    height: 44px;
    color: #ff005c;
    margin: 0px 20px;
    &:hover {
        background-color: #f8f8f8;
    }
`;

const User = () => {
    const [isLoggedIn, setLogggedIn] = useState(false);
    return (
        <>
            <UserHeader />
            <Wrapper>
                <Container>
                    <img
                        alt="user-icon"
                        src="/svg/avatar.svg"
                        height="56"
                        width="auto"
                    />
                    {isLoggedIn ? (
                        <AuthItem>
                            <UserInfo>반반무마니</UserInfo>
                            <UserInfo className="mail">
                                banban2@gmail.com
                            </UserInfo>
                        </AuthItem>
                    ) : (
                        <AuthItem>아직 계정이 없으신가요?</AuthItem>
                    )}
                </Container>
                {isLoggedIn ? (
                    <AuthBtn>로그아웃</AuthBtn>
                ) : (
                    <AuthBtn>로그인하고 시작하기</AuthBtn>
                )}
                <UserItem />
            </Wrapper>
            <TabBar />
        </>
    );
};

export default User;
