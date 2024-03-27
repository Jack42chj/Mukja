import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/DetailInfo";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useLocation } from "react-router-dom";
import { DetailProps } from "../interface/item-interface";

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
    background-color: #ffffff;
`;

const ImageWrapper = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    position: relative;
    width: 100%;
    height: 225px;
    @media (min-width: 628px) {
        height: 448px;
    }
`;

const SliderCount = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000000;
    opacity: 0.6;
    padding: 6px 12px;
    border-radius: 20px;
    color: #ffffff;
    font-size: 0.8rem;
`;

const HeartIcon = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    background-color: #000000;
    opacity: 0.6;
    padding: 10px 10px;
    border-radius: 100%;
    &:hover {
        opacity: 0.5;
    }
`;

const Detail = () => {
    const id = useLocation().state;
    const [placeData, setPlaceData] = useState<DetailProps[]>([]);
    const getPlaceData = async () => {
        try {
            const { data, error } = await supabase
                .from("matzip")
                .select(
                    `id, name, address, description, score, like, review_cnt, image, phnum`
                )
                .eq("id", id);
            if (error) {
                console.error(error);
                return;
            }
            if (data) {
                setPlaceData(data);
            }
        } catch (err: unknown) {
            alert("데이터 불러오기 실패!");
        }
    };
    useEffect(() => {
        getPlaceData();
    }, []);
    return (
        <>
            <DetailHeader />
            <Wrapper>
                <ImageWrapper url={placeData[0]?.image}>
                    <SliderCount>1 / 5</SliderCount>
                    <HeartIcon>
                        <img
                            alt="heart-icon"
                            src="/svg/white-heart.svg"
                            height="20"
                            width="auto"
                        />
                    </HeartIcon>
                </ImageWrapper>
                {placeData.length !== 0 && (
                    <DetailInfo detailList={placeData[0]} />
                )}
            </Wrapper>
        </>
    );
};

export default Detail;
