# MustGo

> **서울에서 내 주변 찐 맛집 찾기**

---

## ⚙️ 요구 사항(Requirements)

> -   Node.js 20.11.1
> -   yarn 1.22.21

---

## 💡 실행 방법(Installation)

```bash
$ cd mukja
$ yarn
$ yan dev
```

---

## 🖥️ 서비스 소개(Introduction)

> **서울에서 진짜 맛집이라고 소문난 "찐" 맛집을 소개하는 웹/앱 서비스입니다.**

---

## 📖 블로그(Blog)

[맛집 추천 서비스](https://velog.io/@hojinch99/series/%EB%A7%9B%EC%A7%91-%EC%B6%94%EC%B2%9C-%EC%84%9C%EB%B9%84%EC%8A%A4)

---

## 🗓️ 개발 기간(Development Period)

> **2024.03.13 ~**

---

## 🙋‍♂️ 멤버 구성(Member)

> **1인 기획, 디자인, 개발**

---

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config

<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

### 🛠️ 개발 기술(Development)

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-696969?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
</div>

### 🪄 디자인(Design)

<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

### 🗺️ 외부 API

<div>
  <img src="https://img.shields.io/badge/kakaomapapi-FFCD00?style=for-the-badge&logo=kakao&logoColor=white">
</div>

---

## 🌟 주요 기능(Specification)

#### 📌 GPS 좌표 관리(GPS)

-   사용자에 현재 GPS 좌표(위도, 경도)를 상태관리 라이브러리로 관리
-   저장한 GPS 좌표를 Kakao Map API의 Geocoding으로 도로명 주소 관리
-   Kakao Map API를 사용한 사용자가 직접 지도에서 자신의 위치 설정

#### ♾️ 무한 스크롤(Infinite Scroll)

-   데이터를 한번에 모두 패치하는 것이 아닌 스크롤이 하단에 닿을 때를 감지해 데이터를 추가적으로 패칭

#### 🍴 맛집 소개(Player)

-   맛집에 대한 주소, 영업 시간, 전화번호, 사진, 후기 제공

#### 🔑 로그인/회원가입(Auth)

-   Supabase Authentication을 이용한 로그인/회원가입

#### ❤️ 찜(Favorite)

-   로그인에 성공한 회원들에게만 제공하는 찜 서비스
-   좋아하는 맛집에 좋아요/찜을 눌러 찜 목록 관리

#### 🔍 검색 기능(Search)

-   입력 받은 검색어를 기반으로 DB에서 결과 조회
-   이전 검색어와 같거나 비어 있으면 검색 재요청 방지
-   추천 키워드로 편리한 검색 기능 제공

#### 🔥 평점순, 좋아요순, 거리순, 리뷰순 맛집 데이터 제공(Filtering)

-   평점순, 좋아요순, 거리순, 리뷰순으로 맛집들을 필터링을 통한 맛집 추천
-   거리순의 경우 사용자의 현재 GPS 좌표와 맛집들의 GPS 좌표를 통한 거리 계산을 통해 가까운 순으로 필터링

#### 🔗 바로가기 탭(Navigation Tab Bar)

-   메인 화면, 검색 화면, 찜 관리 화면, 마이페이지 화면을 언제든지 바로 이동할 수 있는 하단 바로가기 탭
