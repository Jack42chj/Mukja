# 🍽️ 서울에서 내 주변 찐 맛집 찾기 mustGO
<br/><br/>
![logo](https://github.com/Jack42chj/Mukja/assets/86552441/3dd58f46-c7f9-4131-9376-e3eb7200898e)


## 🖥️ 서비스 소개(Introduction)
![sample](https://github.com/Jack42chj/Mukja/assets/86552441/c44c041e-c7b9-4ce7-9103-ff1110bd6ce0)
- 서울에서 진짜 맛집이라고 소문난 "찐" 맛집을 소개하는 웹/앱 서비스입니다.
- GPS 위치를 기반으로 근처에 있는 맛집들을 추천합니다.


## ⚙️ 요구 사항(Requirements)

- Node.js 20.11.1
- yarn 1.22.21


## 💡 실행 방법(Installation)

```bash
$ cd mukja
$ yarn
$ yan dev
```


## 📖 블로그(Blog)

[맛집 추천 서비스](https://velog.io/@hojinch99/series/%EB%A7%9B%EC%A7%91-%EC%B6%94%EC%B2%9C-%EC%84%9C%EB%B9%84%EC%8A%A4)


## 🗓️ 개발 기간(Development Period)

- **전체 기간 : 2024.03.13 ~ 2024.03.29**
- **기획 및 디자인 : 2024.03.13 ~ 2024.03.16**
- **UI 및 기능 구현 : 2024.03.17 ~ 2024.03.26**
- **DB 데이터 수집 : 2024.03.27 ~ 2024.03.29**
<br/><br/>

## 🙋‍♂️ 멤버 구성(Member)

**1인 기획, 디자인, 개발**


## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config

<div>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>

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

## 📁 디렉토리 구조
```bash
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package.json
├─ public
│  └─ svg
│     ├─ 404.svg
│     ├─ avatar.svg
│     ├─ cancle.svg
│     ├─ chat.svg
│     ├─ chevron-down.svg
│     ├─ chevron-left.svg
│     ├─ empty-star.svg
│     ├─ heart.svg
│     ├─ home.svg
│     ├─ locate.svg
│     ├─ location.svg
│     ├─ logo.svg
│     ├─ mail.svg
│     ├─ marker.svg
│     ├─ red-heart.svg
│     ├─ search.svg
│     ├─ star.svg
│     ├─ user.svg
│     └─ white-heart.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ fonts
│  │     ├─ font.css
│  │     └─ Pretendard-Regular.woff
│  ├─ components
│  │  ├─ DetailInfo.tsx
│  │  ├─ EmptyItem.tsx
│  │  ├─ Filter.tsx
│  │  ├─ Footer.tsx
│  │  ├─ header
│  │  │  ├─ DetailHeader.tsx
│  │  │  ├─ MainHeader.tsx
│  │  │  ├─ MapHeader.tsx
│  │  │  ├─ SearchHeader.tsx
│  │  │  └─ UserHeader.tsx
│  │  ├─ KeywordTag.tsx
│  │  ├─ ListItem.tsx
│  │  ├─ ListSkeleton.tsx
│  │  ├─ LocationModal.tsx
│  │  ├─ SearchBox.tsx
│  │  ├─ SearchInput.tsx
│  │  ├─ StarList.tsx
│  │  ├─ TabBar.tsx
│  │  └─ UserItem.tsx
│  ├─ interface
│  │  └─ item-interface.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Detail.tsx
│  │  ├─ Home.tsx
│  │  ├─ MapSetting.tsx
│  │  ├─ Search.tsx
│  │  ├─ SearchResult.tsx
│  │  └─ User.tsx
│  ├─ supabase
│  │  └─ supabase.ts
│  ├─ util
│  ├─ vite-env.d.ts
│  └─ zustand
│     └─ store.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```


## 🌟 주요 기능(Specification)

#### 📌 GPS 좌표 관리(GPS)

- 사용자에 현재 GPS 좌표(위도, 경도)를 상태관리 라이브러리로 관리
- 저장한 GPS 좌표를 Kakao Map API의 Geocoding으로 도로명 주소 관리
- Kakao Map API를 사용한 사용자가 직접 지도에서 자신의 위치 설정

#### ♾️ 무한 스크롤(Infinite Scroll)

-   데이터를 한번에 모두 패치하는 것이 아닌 스크롤이 하단에 닿을 때를 감지해 데이터를 추가적으로 패칭

#### 🍴 맛집 소개(Player)

- 맛집에 대한 주소, 영업 시간, 전화번호, 사진, 후기 제공

#### 🔑 로그인/회원가입(Auth)

- Supabase Authentication을 이용한 로그인/회원가입

#### ❤️ 찜(Favorite)

- 로그인에 성공한 회원들에게만 제공하는 찜 서비스
- 좋아하는 맛집에 좋아요/찜을 눌러 찜 목록 관리

#### 🔍 검색 기능(Search)

- 입력 받은 검색어를 기반으로 DB에서 결과 조회
- 이전 검색어와 같거나 비어 있으면 검색 재요청 방지
- 추천 키워드로 편리한 검색 기능 제공

#### 🔥 평점순, 좋아요순, 거리순, 리뷰순 맛집 데이터 제공(Filtering)

- 평점순, 좋아요순, 거리순, 리뷰순으로 맛집들을 필터링을 통한 맛집 추천
- 거리순의 경우 사용자의 현재 GPS 좌표와 맛집들의 GPS 좌표를 통한 거리 계산을 통해 가까운 순으로 필터링

#### 🔗 바로가기 탭(Navigation Tab Bar)

- 메인 화면, 검색 화면, 찜 관리 화면, 마이페이지 화면을 언제든지 바로 이동할 수 있는 하단 바로가기 탭

## 🔥 트러블 슈팅(Trouble Shooting)

#### 🗺️ 카카오 지도 API 마커 이동 시 useEffect 렌더링 대량 발생 문제

문제: 현재 위치를 지정하기 위해 지도에서 화면 가운데 핀을 고정해 이동한 위치로 현재 위치를 설정하도록 구현했다. 이 부분에서 화면을 움직이면 해당 좌표에 대한 위도와 경도에 대한 데이터를 계속 업데이트 하므로 렌더링 발생이 지속해서 일어나는 문제가 있었다.

대안: 완벽하게 해결할 수는 없지만 그래도 제일 나은 선택으로 React에서 지원하는 hook 'useMemo'를 활용해 메모이제이션 기법으로 데이터 패칭의 빈도수를 낮췄다.

#### 📍 가까운 거리순의 데이터를 제공하기 위한 함수 구현

문제: 위치를 설정하고 해당 위치를 기반으로 가까운 거리의 데이터를 제공하려 하였다. 찾아보니 supabase에서 제공하는 PosGIS를 활용하면 이를 구현 가능하게 되어있어 사용하려 했으나 React에서 호출할 수 있는 supabase 메서드가 제한이 되어있어 사용하지 못하였다.

대안: 이를 해결하기 위해 처음에 데이터를 불러와 필터링을 시키는 방식으로 진행하였다. 데이터를 패칭하고 이를 좌표를 활용한 거리순으로 직접 계산하는 함수를 만들어서 최대 3KM의 데이터만을 필터링하고 이에 가장 가까운 순서로 데이터를 제공하였다.

#### 💽 데이터 수집 문제

문제1: 데이터 수집을 하는 과정이 너무 오래 걸린다.

프로젝트 초기에는 데이터 수집 방식을 크롤링으로 구현하려 하였다. 우선 서울에 있는 맛집을 대상으로 조사한 결과 대략 18,000개가 있다. 결국, 이를 확인하고 검증하기 위해 직접 찾아야 수집을 하는 과정에서는 이미 사라진 집이나 폐업한 식당이 너무 많이 존재하였다. 이를 검수하는 작업을 하면서 DB를 구축하니 시간이 너무 많이 소모된다.

문제2: 이미지 데이터 수집

맛집이라는 주제로 프로젝트를 진행하니 사진에 대한 신뢰도가 높다고 생각하였다. 최근 배달 앱 리뷰를 봐도 일반 글로 써진 리뷰보다 사진 리뷰의 관심이 많고 이를 활용한 마케팅이 중요하다고 생각했다. 그러나 사진과 관련해서는 저작관 문제가 걸려있어 추후에 문제가 될 것으로 생각해 이를 수집하기도 쉽지 않다고 판단했다. 이를 해결하기 위해서는 직접 수집하는 방법밖에 없다고 생각한다.

위와 같은 문제들로 결국 프로젝트는 완성하기 힘들다고 판단하여 UI 및 기능 구현은 끝냈지만 아쉽게도 데이터 수집 문제로 진행을 중단하였다.
