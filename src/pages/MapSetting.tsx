import { useEffect, useState } from "react";
import styled from "styled-components";
import MapHeader from "../components/header/MapHeader";
import LocStore from "../zustand/store";
import { useNavigate } from "react-router-dom";

const Kakao = styled.div`
    width: 100%;
    height: 92.4vh;
`;

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
    position: relative;
`;

const Container = styled.div`
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 20px;
    bottom: 0;
    background-color: #ffffff;
    max-width: 768px;
    width: 100%;
    height: 160px;
    border-top: 1px solid #d9d9d9;
    gap: 14px;
`;

const SettingBtn = styled.span`
    cursor: pointer;
    border: none;
    background-color: #5a5a5a;
    color: #ffffff;
    border-radius: 10px;
    font-size: 1rem;
    padding: 16px 18px;
    text-align: center;
`;

const CurrentBtn = styled.span`
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    color: #ffffff;
    border-radius: 100%;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 10px;
    bottom: 180px;
    z-index: 1;
`;

const Item = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    &.street {
        font-size: 0.9rem;
        font-weight: normal;
    }
`;

const MapSetting = () => {
    const navigate = useNavigate();
    const { setAddress, setLocation, address, location } = LocStore();
    const [region, setRegion] = useState(address);
    const [road, setRoad] = useState("");
    const [street, setStreet] = useState("");
    const [map, setMap] = useState<kakao.maps.Map | null>(null);
    const [marker, setMarker] = useState<kakao.maps.Marker | null>(null);

    useEffect(() => {
        const kakao = window.kakao;
        kakao.maps.load(() => {
            let container = document.getElementById("map");
            if (container) {
                let options = {
                    center: new kakao.maps.LatLng(location[0], location[1]),
                    level: 4,
                };
                let newMap = new kakao.maps.Map(container, options);
                getAddressFromCoordinate(newMap.getCenter());
                setMap(newMap);
                let markerUrl = "/svg/marker.svg";
                let markerSize = new kakao.maps.Size(32, 36);
                let markerImage = new kakao.maps.MarkerImage(
                    markerUrl,
                    markerSize
                );
                let markerPosition = new kakao.maps.LatLng(
                    location[0],
                    location[1]
                );
                let newMarker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });
                setMarker(newMarker);
                newMarker.setMap(newMap);
                kakao.maps.event.addListener(
                    newMap,
                    "center_changed",
                    function () {
                        var center = newMap.getCenter();
                        newMarker.setPosition(center);
                        getAddressFromCoordinate(center);
                    }
                );
            }
        });
    }, []);

    const getAddressFromCoordinate = (coordinate: kakao.maps.LatLng) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.coord2Address(
            coordinate.getLng(),
            coordinate.getLat(),
            (result: any, status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const address = result[0].address;
                    const road_address = result[0].road_address;
                    const name =
                        address.region_2depth_name +
                        " " +
                        address.region_3depth_name;
                    if (road_address) {
                        const road_name =
                            road_address?.region_2depth_name +
                            " " +
                            road_address?.road_name +
                            " " +
                            road_address?.main_building_no;
                        setRoad(road_name);
                    }
                    setStreet("[지번] " + address.address_name);
                    setRegion(name);
                }
            }
        );
    };

    const onClickBtn = () => {
        if (map) {
            const center = map.getCenter();
            setLocation([center.getLat(), center.getLng()]);
            setAddress(region);
            navigate("/");
        }
    };

    const onClickCurrBtn = () => {
        if (map && marker) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const center = new kakao.maps.LatLng(latitude, longitude);
                map.setCenter(center);
                marker.setPosition(center);
                getAddressFromCoordinate(center);
            });
        }
    };

    return (
        <>
            <MapHeader />
            <Wrapper>
                <Kakao id="map" />
                <Container>
                    <Item>{road}</Item>
                    <Item className="street">{street}</Item>
                    <SettingBtn onClick={onClickBtn}>
                        선택한 위치로 설정하기
                    </SettingBtn>
                </Container>
                <CurrentBtn onClick={onClickCurrBtn}>
                    <img
                        alt="location-icon"
                        src="/svg/location.svg"
                        height="20"
                        width="auto"
                    />
                </CurrentBtn>
            </Wrapper>
        </>
    );
};

export default MapSetting;
