# 💍 Invitation Explorer – 나만의 청첩장 어플리케이션

## 📌 Summary  
내가 직접 만든 세상에 하나뿐인 나만의 청첩장 어플리케이션입니다.

- **Swiper를 활용한 사진첩**,  
- **결혼식 날 까지의 D-Day 조회**,
- **결혼식장 위치 표시**,  
- **방명록 등록 및 조회**  
기능들을 확인 하실 수 있습니다.

> 🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.

<br>

## 🛠️ 사용 기술 및 언어  
- **Frontend**: React, TypeScript  
- **Styling**: Tailwind CSS
- **UI Library**: swiper (슬라이더), react-copy-to-clipboard (클립보드)
- **API**: react-kakao-maps-sdk API
- **DataBase**: Firebase

<br>

## 🔗 프로젝트 링크  
- GitHub: [https://github.com/SW-Yerim/InvitationAPI](https://github.com/SW-Yerim/InvitationAPI)  
- Live Demo: [https://sw-yerim.github.io/InvitationAPI](https://sw-yerim.github.io/InvitationAPI)
- 프로젝트 상세내용 : https://wooye.tistory.com/27

<br>

## ✨ 주요 기능 및 특징  
- Firebase 로 DB를 생성하여 방명록 등록, 출력
- 맵 API 사용해서 위치 표시
- dayjs 를 사용하여 D-Day 계산
- 전화, 문자 아이콘 출력 시 전화앱, 문자앱 연동
- 카드 아이콘 클릭 시 계좌번호 클립보드 복사
- 반응형 UI (모바일/태블릿 대응)

<br>

## 🎯 프로젝트 선정 이유 및 느낀점

1. **Firebase 로 DB 생성**  
   - Firebase 에 DB를 생성해서 방명록 기능 구현하였습니다.

2. **Swiper 슬라이드 UI 구성**  
   - 시각적인 요소가 중요한 프로젝트에서 `Siper` 라이브러리를 활용하여 사용자 친화적인 UI를 구성하는 방법을 경험해보았습니다.

3. **카카오 Map API 로 지도 구현**  
   - OpenAPI 를 사용하여 필요한 정보를 필터링하고 가공하여 컴포넌트에 적용하는 과정을 실습하였습니다.

4. **반응형 스타일링 실습**  
   - `Tailwind CSS`를 활용하여 다양한 디바이스에서도 자연스럽게 동작할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.

<br>

## 🧩 트러블슈팅  

| 문제 상황 | 원인 | 해결 방법 | 상세내용 |
|-----------|------|------------|------------|
| 클립보드인 writeText 사용 시 모바일에서 오류가 발생했습니다. | 로컬 환경이 HTTPS 로 되어있지 않아 발생한 오류였습니다. | `react-copy-to-clipboard` 를 사용해서 클립보드 기능을 구현하였습니다. | https://wooye.tistory.com/26 |
| firebase에서 가져온 데이터의 줄바꿈이 적용되지 않았습니다. | div 와 p 태그는 줄바꿈 데이터인 `\n`를 무시하고 한줄로 출력이 돼서 발생한 오류였습니다. | css 의 `white-space`를 사용해서 해결하였습니다. | https://wooye.tistory.com/24 |


<br>

