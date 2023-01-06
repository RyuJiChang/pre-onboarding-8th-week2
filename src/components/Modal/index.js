import { useEffect, useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalContainer, ModalBackdrop, ModalView, Button } from './styles';
function Modal({ isOpen, onClose, listData, data, setData }) {
  const [isModify, setIsModify] = useState(false);
  const [modifyData, setModifyData] = useState(listData);
  const outsideRef = useRef();
  const closeModal = e => {
    if (e.target === outsideRef.current) {
      onClose();
      setIsModify(false);
    }
  };
  useEffect(() => {
    setModifyData({ ...listData });
  }, [listData]);

  const modifyOn = () => {
    setIsModify(true);
  };

  const saveList = e => {
    e.preventDefault();

    if (listData.listState === modifyData.listState) {
      let newArr = [...data[listData.listState + 'Arr']].map(el => {
        if (el.id === modifyData.id) {
          return { ...modifyData };
        } else {
          return el;
        }
      });
      if (modifyData.listState === 'todo') {
        setData({
          todoArr: [...newArr],
          inProgressArr: [...data.inProgressArr],
          doneArr: [...data.doneArr],
          idNow: data.idNow,
        });
      } else if (modifyData.listState === 'inProgress') {
        setData({
          todoArr: [...data.todoArr],
          inProgressArr: [...newArr],
          doneArr: [...data.doneArr],
          idNow: data.idNow,
        });
      } else if (modifyData.listState === 'done') {
        setData({
          todoArr: [...data.todoArr],
          inProgressArr: [...data.inProgressArr],
          doneArr: [...newArr],
          idNow: data.idNow,
        });
      }
    } else {
      if (modifyData.listState === 'todo') {
        setData({
          todoArr: [...data.todoArr, modifyData],
          inProgressArr: [...data.inProgressArr].filter(el => el.id !== listData.id),
          doneArr: [...data.doneArr].filter(el => el.id !== listData.id),
          idNow: data.idNow,
        });
      } else if (modifyData.listState === 'inProgress') {
        setData({
          todoArr: [...data.todoArr].filter(el => el.id !== listData.id),
          inProgressArr: [...data.inProgressArr, modifyData],
          doneArr: [...data.doneArr].filter(el => el.id !== listData.id),
          idNow: data.idNow,
        });
      } else if (modifyData.listState === 'done') {
        setData({
          todoArr: [...data.todoArr].filter(el => el.id !== listData.id),
          inProgressArr: [...data.inProgressArr].filter(el => el.id !== listData.id),
          doneArr: [...data.doneArr, modifyData],
          idNow: data.idNow,
        });
      }
    }
    setIsModify(false);
    onClose();
  };

  const cancleModify = () => {
    setModifyData({ ...listData });
    setIsModify(false);
  };

  const deletList = e => {
    if (listData.listState === 'todo') {
      setData({
        todoArr: [...data.todoArr].filter(el => el.id !== listData.id),
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      });
    } else if (listData.listState === 'inProgress') {
      setData({
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr].filter(el => el.id !== listData.id),
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      });
    } else if (listData.listState === 'done') {
      setData({
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr].filter(el => el.id !== listData.id),
        idNow: data.idNow,
      });
    }
    onClose();
  };

  const modifyListData = e => {
    console.log(e.target.value);
    if ('todo inProgress done'.includes(e.target.id))
      setModifyData({
        ...modifyData,
        listState: e.target.id,
      });
    else if (e.target.id === 'title') {
      setModifyData({
        ...modifyData,
        title: e.target.value,
      });
    } else if (e.target.id === 'manager') {
      setModifyData({
        ...modifyData,
        manager: e.target.value,
      });
    } else if (e.target.id === 'expiryDate') {
      setModifyData({
        ...modifyData,
        expiryDate: e.target.value,
      });
    } else if (e.target.id === 'contents') {
      setModifyData({
        ...modifyData,
        contents: e.target.value,
      });
    }
  };

  return isOpen ? (
    <ModalContainer onClick={event => event.stopPropagation()}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
        {isModify ? (
          <ModalView>
            <div onSubmit={saveList}>
              <form>
                <div>
                  <span>제목 : </span>{' '}
                  <input
                    id="title"
                    type="text"
                    value={modifyData.title}
                    onChange={modifyListData}
                  />
                </div>
                <div>
                  <span>상태 : </span>
                  <input
                    checked={modifyData.listState === 'todo'}
                    id="todo"
                    name="state"
                    type="radio"
                    onChange={modifyListData}
                  />
                  Todo
                  <input
                    checked={modifyData.listState === 'inProgress'}
                    id="inProgress"
                    name="state"
                    type="radio"
                    onChange={modifyListData}
                  />
                  In Progress
                  <input
                    checked={modifyData.listState === 'done'}
                    id="done"
                    name="state"
                    type="radio"
                    onChange={modifyListData}
                  />
                  Done
                </div>
                <div>
                  <span>관리자 : </span>{' '}
                  <input
                    id="manager"
                    type="text"
                    value={modifyData.manager}
                    onChange={modifyListData}
                  />
                </div>
                <div>
                  <span>마감일 : </span>{' '}
                  <input
                    id="expiryDate"
                    type="datetime-local"
                    value={modifyData.expiryDate}
                    onChange={modifyListData}
                  />
                </div>
                <div>
                  <span>내용 : </span>{' '}
                  <textarea id="contents" value={modifyData.contents} onChange={modifyListData} />
                </div>
                <br />
                <input type="submit" value={'저장'} />
                <button onClick={cancleModify}>취소</button>
              </form>
            </div>
            <Button
              onClick={() => {
                onClose();
                setIsModify(false);
              }}
            >
              <GrClose />
            </Button>
          </ModalView>
        ) : (
          <ModalView>
            제목 : {listData?.title}
            <br />
            상태 : {listData?.listState}
            <br />
            관리자 : {listData?.manager}
            <br />
            마감일 :{listData?.expiryDate.slice(0, 10)}
            <br />
            내용 : {listData?.contents}
            <Button onClick={onClose}>
              <GrClose />
            </Button>
            <br />
            <button onClick={modifyOn}>수정</button>
            <button onClick={deletList}>삭제</button>
          </ModalView>
        )}
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default Modal;
