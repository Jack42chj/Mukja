//조회 아이템
export interface ListProps {
    id: string;
    name: string;
    category: string;
    address: string;
    score: number;
    like: number;
    review_cnt: number;
    image: string;
}

//상세보기
export interface DetailProps {
    id: string;
    name: string;
    address: string;
    description: string;
    phnum: string;
    score: number;
    like: number;
    review_cnt: number;
    image: string;
}
