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
        listState: 'todo',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 2,
        title: '2제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'todo',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    inProgressArr: [
      {
        id: 3,
        title: '3제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 4,
        title: '4제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 5,
        title: '5제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 6,
        title: '6제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 7,
        title: '7제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 8,
        title: '8제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'inProgress',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    doneArr: [
      {
        id: 9,
        title: '9제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 10,
        title: '10제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 11,
        title: '11제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 12,
        title: '12제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 13,
        title: '13제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 14,
        title: '14제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },

      {
        id: 15,
        title: '15제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 16,
        title: '16제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
      {
        id: 17,
        title: '17제목입니다.',
        contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
        expiryDate: '2023-01-03T13:18',
        listState: 'done',
        manager: '류지창(이미지도 있으면 좋고)',
      },
    ],
    idNow: 18,
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [isMakeIssue, setIsMakeIssue] = useState(false);
  const [data, setData] = useState(dummydata);
  const [listData, setListData] = useState({
    id: 1,
    title: '제목입니다.',
    contents: '할일 내용에 맞게 뭔가 좀 긴 내용이 들어가게 작성',
    expiryDate: '2023-01-03T13:18',
    listState: 'done',
    manager: '류지창(이미지도 있으면 좋고)',
  });
  console.log(data);
  const openMakeIssue = e => {
    setIsMakeIssue(true);
  };

  const closeMakeIssue = e => {
    setIsMakeIssue(false);
  };

  const modalHandler = async (el, e) => {
    await setListData(...data[el.listState + 'Arr'].filter(e => e.id === el.id));
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
                <List
                  key={el.id}
                  onClick={e => {
                    modalHandler(el, e);
                  }}
                >
                  <FaRegPauseCircle className="logo" />
                  {el.title}
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
                <List
                  key={el.id}
                  onClick={e => {
                    modalHandler(el, e);
                  }}
                >
                  <FaRegPlayCircle className="logo" />
                  {el.title}
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
                <List
                  key={el.id}
                  onClick={e => {
                    modalHandler(el, e);
                  }}
                >
                  <FaRegCheckCircle className="logo" />
                  {el.title}
                </List>
              );
            })}
          </ListContainer>
          <IssueMakerButton onClick={openMakeIssue}>추가</IssueMakerButton>
        </BoxContainer>
      </BoxContainerWrapper>
      <Modal isOpen={modalOpen} onClose={onClose} listData={listData} nothing={dataHandler} />
      <MakeIssue isOpen={isMakeIssue} onClose={closeMakeIssue} setData={setData} data={data} />
    </MainContainer>
  );
}

export default App;
