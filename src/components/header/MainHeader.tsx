import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LocationModal from "../LocationModal";
import { useState } from "react";
import LocStore from "../../zustand/store";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 768px;
    width: 100%;
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
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 5px;
`;

const MainHeader = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const { address } = LocStore();
    return (
        <Wrapper>
            <Container>
                <Item onClick={() => navigate("/")}>
                    <img
                        alt="logo-icon"
                        src="/svg/logo.svg"
                        height="36"
                        width="auto"
                    />
                </Item>
                <Item onClick={openModal}>
                    {address}
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
            </Container>
            <LocationModal isOpen={isOpen} closeModal={closeModal} />
        </Wrapper>
    );
};

export default MainHeader;
