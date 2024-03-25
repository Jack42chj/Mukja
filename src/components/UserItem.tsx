import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const itemList = [
    { name: "위치 설정", src: "/svg/locate.svg", path: "/map-setting" },
    { name: "찜 관리", src: "/svg/heart.svg", path: "/map-setting" },
    { name: "리뷰 관리", src: "/svg/chat.svg", path: "/map-setting" },
];

const ItemWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    margin: 16px 0px;
    &.query-item {
        cursor: default;
        border-top: 1px solid #d9d9d9;
        margin-top: 0px;
        padding-top: 36px;
    }
`;

const ItemTitle = styled.div`
    margin: 0px 20px;
    font-size: 1rem;
    font-weight: bold;
`;

const ItemBox = styled.div`
    margin: 0px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1rem;
`;

const QeuryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const UserItem = () => {
    const navigate = useNavigate();
    return (
        <>
            <ItemWrapper>
                <ItemTitle>My 메뉴</ItemTitle>
                {itemList.map((item) => (
                    <ItemBox
                        key={item.name}
                        onClick={() => navigate(item.path)}
                    >
                        <img
                            alt="user-icon"
                            src={item.src}
                            height="28"
                            width="auto"
                        />
                        {item.name}
                    </ItemBox>
                ))}
            </ItemWrapper>
            <ItemWrapper className="query-item">
                <ItemTitle>고객 문의</ItemTitle>
                <ItemBox>
                    <img
                        alt="user-icon"
                        src="/svg/mail.svg"
                        height="24"
                        width="auto"
                    />
                    <QeuryItem>
                        <div>이메일</div>
                        <div>gildong@gmail.com</div>
                    </QeuryItem>
                </ItemBox>
            </ItemWrapper>
        </>
    );
};

export default UserItem;
