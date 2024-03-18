import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LocStore from "../zustand/store";

interface ModalProps {
    isOpen: Boolean;
    closeModal: () => void;
}

const slide = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
    z-index: 999;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Container = styled.div`
    width: 100%;
    max-width: 768px;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    padding: 10px 20px 112px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    bottom: 0;
    animation: ${slide} 0.3s ease-in-out;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
`;

const List = styled.div`
    margin: 16px 0px;
    cursor: pointer;
`;

const LocationModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const navigate = useNavigate();
    const { setAddress, setLocation } = LocStore();
    const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOpen && e.target === e.currentTarget) {
            closeModal();
        }
    };
    const onClickGPS = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const geocoder = new window.kakao.maps.services.Geocoder();
            setLocation([longitude, latitude]);
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
        closeModal();
    };
    return (
        <Wrapper
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={onClickClose}
        >
            <Container>
                <Title>위치 설정</Title>
                <List onClick={onClickGPS}>현재 위치로 설정</List>
                <List onClick={() => navigate("/map-setting")}>
                    지도에서 직접 위치 설정
                </List>
            </Container>
        </Wrapper>
    );
};

export default LocationModal;
