import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    position: sticky;
    height: 50px;
    padding: 0px 20px;
    top: 0px;
`;

const Item = styled.div`
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <Wrapper>
            <Item>
                <img
                    alt="logo-icon"
                    src="/svg/heart.svg"
                    height="20"
                    width="auto"
                />
            </Item>
            <Item>
                노원구 월계동
                <img
                    alt="chevron-down-icon"
                    src="/svg/chevron-down.svg"
                    height="20"
                    width="auto"
                />
            </Item>
            <Item>
                <img
                    alt="user-icon"
                    src="/svg/user.svg"
                    height="20"
                    width="auto"
                />
            </Item>
        </Wrapper>
    );
};

export default Header;
