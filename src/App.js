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

  // const dragStart = (e, el) => {
  //   console.log(index, el.listState);
  //   // e.dataTransfer.setData('todoId', el.id);
  // };
  // const dragEnter = (e, el) => {
  //   // let element = document.getElementById(el.id);
  //   // console.log(element.getBoundingClientRect());
  // };

  const dragEnd = (e, el) => {
    // console.log(el.listState, el.id); //start state

    let index = 0;
    let finalState;
    let element = document.elementFromPoint(e.clientX, e.clientY);
    //컨테이너로 지정될 경우 위치 파악
    if (['todo', 'inProgress', 'done'].includes(element.id)) {
      finalState = element.id;
      for (let i = 0; i < element.childNodes.length; i++) {
        let elementRect = element.childNodes[i].getBoundingClientRect();
        if (e.clientY >= (elementRect.top + elementRect.bottom) / 2) {
          if (String(el.id) !== element.childNodes[i].id) {
            index++;
          }
        } else {
          break;
        }
      }
    }
    //리스트로 지정된 경우 리스트 index 파악
    else {
      finalState = element.parentElement.id;
      for (let i = 0; i < element.parentElement.childNodes.length; i++) {
        let elementRect = element.parentElement.childNodes[i].getBoundingClientRect();
        if (e.clientY >= (elementRect.top + elementRect.bottom) / 2) {
          if (String(el.id) !== element.childNodes[i].id) {
            index++;
          }
        } else {
          break;
        }
      }
    }
    console.log(el.id, el.listState);
    moveList(el.id, el.listState, index, finalState);
  };

  const moveList = (startId, startState, index, finalState) => {
    // console.log('now moving start', startState, startId);
    let newData;
    let moveList = {
      ...data[startState + 'Arr'].filter(el => el.id === startId)[0],
      listState: finalState,
    };
    if (startState === 'todo') {
      newData = {
        todoArr: [...data.todoArr].filter(el => el.id !== startId),
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      };
    } else if (startState === 'inProgress') {
      newData = {
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr].filter(el => el.id !== startId),
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      };
    } else if (startState === 'done') {
      newData = {
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr].filter(el => el.id !== startId),
        idNow: data.idNow,
      };
    }
    newData[finalState + 'Arr'].splice(index, 0, moveList);
    setData(newData);
    localStorage.setItem('IssueData', JSON.stringify(newData));
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
          <ListContainer id="todo">
            {data.todoArr.map(el => {
              return (
                <List
                  draggable
                  // onDragStart={e => dragStart(e, el)}
                  // onDragEnter={e => dragEnter(e, el)}
                  onDragEnd={e => dragEnd(e, el)}
                  id={el.id}
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
          <ListContainer id="inProgress">
            {data.inProgressArr.map(el => {
              return (
                <List
                  draggable
                  // onDragStart={e => dragStart(e, el)}
                  // onDragEnter={e => dragEnter(e, el)}
                  onDragEnd={e => dragEnd(e, el)}
                  id={el.id}
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
          <ListContainer id="done">
            {data.doneArr.map(el => {
              return (
                <List
                  draggable
                  // onDragStart={e => dragStart(e, el)}
                  // onDragEnter={e => dragEnter(e, el)}
                  onDragEnd={e => dragEnd(e, el)}
                  id={el.id}
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
