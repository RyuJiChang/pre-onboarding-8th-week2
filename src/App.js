import { FaRegPauseCircle, FaRegPlayCircle, FaRegCheckCircle } from 'react-icons/fa';

import {
  MainContainer,
  Header,
  BoxContainerWrapper,
  BoxContainer,
  ContainerHeader,
  ContainerTitle,
  ContainerListNumber,
  ListContainer,
  List,
} from './App.styles';

function App() {
  let data = {
    todoArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    inProgressArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    doneArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '입력규칙대로넣기',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
  };
  return (
    <MainContainer>
      <Header>Issue Tracking Service</Header>
      <BoxContainerWrapper>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>Todo</ContainerTitle>
            <ContainerListNumber>{data.todoArr.length}</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            {data.todoArr.map(el => {
              return (
                <List key={el.id}>
                  <FaRegPauseCircle className="logo" />
                  {el.title}
                </List>
              );
            })}
          </ListContainer>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>In Progress</ContainerTitle>
            <ContainerListNumber>{data.inProgressArr.length}</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            {data.inProgressArr.map(el => {
              return (
                <List key={el.id}>
                  <FaRegPlayCircle className="logo" />
                  {el.title}
                </List>
              );
            })}
          </ListContainer>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>Done</ContainerTitle>
            <ContainerListNumber>{data.doneArr.length}</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            {data.doneArr.map(el => {
              return (
                <List key={el.id}>
                  <FaRegCheckCircle className="logo" />
                  {el.title}
                </List>
              );
            })}
          </ListContainer>
        </BoxContainer>
      </BoxContainerWrapper>
    </MainContainer>
  );
}

export default App;
