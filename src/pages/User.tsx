import styled from "styled-components";
import UserHeader from "../components/header/UserHeader";
import TabBar from "../components/TabBar";
import UserItem from "../components/UserItem";

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
    gap: 20px;
`;

const AuthBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #ff005c;
    border-radius: 10px;
    height: 44px;
    color: #ff005c;
    margin: 0px 20px;
`;

const User = () => {
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
                    <AuthItem>아직 계정이 없으신가요?</AuthItem>
                </Container>
                <AuthBtn>로그인하고 시작하기</AuthBtn>
                <UserItem />
            </Wrapper>
            <TabBar />
        </>
    );
};

export default User;
