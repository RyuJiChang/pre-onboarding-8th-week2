# 프리온보딩 프론트엔드 챌린지 week2 과제

## 📕 개요

**📎[배포링크 바로가기](https://curious-druid-e0ce6b.netlify.app/)**

### 과제 목적

> 이슈 트래킹 기능 구현(e.g, Jira, Trello)

### 기간

2023.01.04(수) ~ 2023.01.06(금)

---

## 👨‍👩‍👧‍👦 Member

| 류지창                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| <img src="https://avatars.githubusercontent.com/u/104156381?s=70&v=4" width="100" height="100"/> |
---

## 🖥 Demo(gif 생성 예정)
Drag and Drop 시연<br><br>
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/104156381/211131418-0bb39eba-382c-494c-9b3f-f6d22735caef.gif)
---

## ⚡️ 사용 라이브러리

1. React
2. Styled-components
3. ESLint
4. Prettier

---

## ✅ 요구사항
1. 구현 사항

- [x] 각 이슈는 CRUD(생성, 표출, 수정, 삭제)가 적용되어야 한다.
- [x] 이슈는 각각 **고유번호, 제목, 내용, 마감일, 상태, 담당자**가 존재한다.
- [x] 이슈의 상태는 **“할 일”, “진행 중”, 완료”**가 존재하며 칸반보드와 같이 상태별로 분류된다
- [x] 이슈의 작성 폼에서는 **제목, 내용, 마감일, 상태, 담당자**를 입력할 수 있다.
  - [x] 제목은 `<input type=”text”>` 태그를 사용한다.
  - [x] 내용은 `<textarea>` 태그를 사용한다.
  - [x] 마감일은 `<input type=”datetime-local”>` 태그를 사용한다.
  - [ ] 담당자 선택은 아래의 방식으로 이루어진다.
    - [ ] 사전에 임의의 담당자 목록을 구성한다.
    - [ ] `<input type=”text”>` 태그를 이용해 담당자를 검색한다.
    - [ ] 검색을 수행하면 검색결과 값이 노출되며 그 중 하나를 선택해서 담당자를 지정한다.
- [x] 각 이슈를 클릭 시 상세정보 창이 표시된다.
  - [x] 상세정보 창에는 **“저장”**버튼이 존재한다.
  - [x] 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, **“저장”**버튼을 클릭 시 수정한 내용이 반영된다.
- [x] 이슈 상태별 목록은 기본적으로 고유번호 순서대로 오름차순 정렬한다.
- [x] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.
- [x] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 상태를 변경할 수 있다.

2. 구현 조건

- [ ] 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야한다.
- [ ] 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.
- [x] 데이터는 새로고침해도 유지될 수 있도록 관리한다.
---

## 🐙 Git

| rule     | 설명                                                     |
| -------- | -------------------------------------------------------- |
| feat     | 새로운 기능 추가                                         |
| fix      | 버그 수정                                                |
| !HOTFIX  | 급하게 치명적인 버그를 고쳐야하는 경우                   |
| docs     | 문서 수정                                                |
| style    | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링                                            |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가                   |
| chore    | 빌드 업무 수정, 패키지 매니저 수정                       |

- ### 📘 **Git branch strategy**

**git-flow** 사용

- feature branches
- main

branch명 규칙: `커밋 타입`/#`이슈번호` 포멧으로 생성
commit 메시지 규칙: `커밋타입`: `내용` 포멧으로 작성

## 📢 프로젝트 실행방법

```
npm install
npm start
```


## 📝 문서

[개발일지1](https://happyp.tistory.com/516)<br><br>
[개발일지2](https://happyp.tistory.com/518)<br><br>
[개발일지3](https://happyp.tistory.com/520)

