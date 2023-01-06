import { useEffect, useState } from 'react';
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
    todoArr: [],
    inProgressArr: [],
    doneArr: [],
    idNow: 1,
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

  useEffect(() => {
    if (!localStorage.getItem('IssueData')) {
      localStorage.setItem(
        'IssueData',
        JSON.stringify({
          todoArr: [],
          inProgressArr: [],
          doneArr: [],
          idNow: 1,
        })
      );
      return;
    }
    setData(JSON.parse(localStorage.getItem('IssueData')));
  }, []);

  const openMakeIssue = e => {
    setIsMakeIssue(true);
  };

  const closeMakeIssue = e => {
    setIsMakeIssue(false);
  };

  const modalHandler = (el, e) => {
    setListData(...data[el.listState + 'Arr'].filter(e => e.id === el.id));
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
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
      <Modal
        isOpen={modalOpen}
        onClose={onClose}
        listData={listData}
        setData={setData}
        data={data}
      />
      <MakeIssue isOpen={isMakeIssue} onClose={closeMakeIssue} setData={setData} data={data} />
    </MainContainer>
  );
}

export default App;
