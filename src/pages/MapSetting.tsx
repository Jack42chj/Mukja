import { useEffect, useState } from "react";
import styled from "styled-components";
import MapHeader from "../components/header/MapHeader";

const Kakao = styled.div`
    width: 100%;
    height: 84vh;
`;

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
`;

const Location = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 10px;
    border-bottom: 1px solid #d9d9d9;
    color: #696969;
    margin: 5px 0px;
`;

const LocationIcon = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

const Search = styled.input`
    border: none;
    outline: none;
    font-family: "Pretendard";
    font-size: 1rem;
    padding: 10px 10px;
    width: 100%;
`;

const SettingBtn = styled.span`
    cursor: pointer;
    border: none;
    background-color: #5467f5;
    color: #ffffff;
    border-radius: 20px;
    font-size: 0.8rem;
    padding: 12px 18px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
    z-index: 1;
`;

const MapSetting = () => {
    const [word, setWord] = useState("");
    const [region, setRegion] = useState("종로구 종로 1가");
    const [map, setMap] = useState<kakao.maps.Map | null>(null);
    const [marker, setMarker] = useState<kakao.maps.Marker | null>(null);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };
    useEffect(() => {
        const kakao = window.kakao;
        kakao.maps.load(() => {
            var container = document.getElementById("map");
            var options = {
                center: new kakao.maps.LatLng(
                    37.570227990912244,
                    126.98315081716676
                ),
                level: 4,
            };
            var newMap = new kakao.maps.Map(container, options);
            setMap(newMap);
            let markerPosition = new kakao.maps.LatLng(
                37.570227990912244,
                126.98315081716676
            );
            let newMarker = new kakao.maps.Marker({
                position: markerPosition,
            });
            newMarker.setMap(newMap);
            setMarker(newMarker);
            kakao.maps.event.addListener(newMap, "center_changed", function () {
                var center = newMap.getCenter();
                newMarker.setPosition(center);
                getAddressFromCoordinate(center);
            });
            // var ps = new kakao.maps.services.Places();

            // ps.keywordSearch(word, placesSearchCB);

            // function placesSearchCB(data: any, status: any) {
            //     if (status === kakao.maps.services.Status.OK) {
            //         let bounds = new kakao.maps.LatLngBounds();
            //         bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
            //         newMap.setBounds(bounds);
            //         console.log(data[0].y, data[0].x);
            //     }
            // }
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
                    const name =
                        address.region_2depth_name +
                        " " +
                        address.region_3depth_name;
                    setRegion(name);
                }
            }
        );
    };

    const onClickBtn = () => {
        if (map && marker) {
            let bounds = new window.kakao.maps.LatLngBounds();
            bounds.extend(marker.getPosition());
            map.setBounds(bounds);
        }
    };

    return (
        <>
            <MapHeader />
            <Wrapper>
                <Location>
                    <LocationIcon>
                        <img
                            alt="location-icon"
                            src="/svg/location.svg"
                            height="16"
                            width="auto"
                        />
                    </LocationIcon>
                    {region}
                </Location>
                <Search
                    placeholder="검색"
                    type="text"
                    value={word}
                    onChange={onChange}
                />
                <Kakao id="map" />
                <SettingBtn onClick={onClickBtn}>위치 설정</SettingBtn>
            </Wrapper>
        </>
    );
};

export default MapSetting;
