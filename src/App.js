import { useState } from 'react';
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
  IssueMakerButton,
} from './App.styles';
import { Modal, MakeIssue } from './components';

function App() {
  let dummydata = {
    todoArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    inProgressArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    doneArr: [
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 1,
        title: '제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [isMakeIssue, setIsMakeIssue] = useState(false);
  const [data, setData] = useState(dummydata);

  const openMakeIssue = e => {
    setIsMakeIssue(true);
  };

  const closeMakeIssue = e => {
    setIsMakeIssue(false);
  };

  const modalHandler = e => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const dataHandler = () => {
    setData(dummydata);
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
                <List key={el.id} onClick={modalHandler}>
                  <FaRegPauseCircle className="logo" />
                  {el.title}
                  <Modal isOpen={modalOpen} onClose={onClose} listData={el} nothing={dataHandler} />
                </List>
              );
            })}
          </ListContainer>
          <IssueMakerButton onClick={openMakeIssue}>추가</IssueMakerButton>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>In Progress</ContainerTitle>
            <ContainerListNumber>{data.inProgressArr.length}</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            {data.inProgressArr.map(el => {
              return (
                <List key={el.id} onClick={modalHandler}>
                  <FaRegPlayCircle className="logo" />
                  {el.title}
                  <Modal isOpen={modalOpen} onClose={onClose} listData={el} />
                </List>
              );
            })}
          </ListContainer>
          <IssueMakerButton onClick={openMakeIssue}>추가</IssueMakerButton>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>Done</ContainerTitle>
            <ContainerListNumber>{data.doneArr.length}</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            {data.doneArr.map(el => {
              return (
                <List key={el.id} onClick={modalHandler}>
                  <FaRegCheckCircle className="logo" />
                  {el.title}
                  <Modal isOpen={modalOpen} onClose={onClose} listData={el} />
                </List>
              );
            })}
          </ListContainer>
          <IssueMakerButton onClick={openMakeIssue}>추가</IssueMakerButton>
        </BoxContainer>
      </BoxContainerWrapper>
      <MakeIssue isOpen={isMakeIssue} onClose={closeMakeIssue} setData={setData} />
    </MainContainer>
  );
}

export default App;
