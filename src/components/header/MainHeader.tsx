import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LocationModal from "../LocationModal";
import { useEffect, useState } from "react";
import LocStore from "../../zustand/store";

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 1;
`;

const Container = styled.div`
    max-width: 768px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 50px;
    padding: 0px 20px;
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
    const { address, setAddress, setLocation } = LocStore();
    const getCurrentPos = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const geocoder = new window.kakao.maps.services.Geocoder();
            setLocation([latitude, longitude]);
            geocoder.coord2Address(longitude, latitude, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const address = result[0].address;
                    const name =
                        address.region_2depth_name +
                        " " +
                        address.region_3depth_name;
                    setAddress(name);
                }
            });
        });
    };
    // useEffect(() => {
    //     getCurrentPos();
    //     console.log(1);
    //     //이 부분은 첫 방문시만 작동하게 만들 필요가 있음
    // }, []);
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
                        height="24"
                        width="auto"
                    />
                </Item>
                <Item>
                    <img
                        alt="user-icon"
                        src="/svg/user.svg"
                        height="24"
                        width="auto"
                    />
                </Item>
            </Container>
            <LocationModal isOpen={isOpen} closeModal={closeModal} />
        </Wrapper>
    );
};

export default MainHeader;
