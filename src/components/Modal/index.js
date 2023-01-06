import { useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalContainer, ModalBackdrop, ModalView, Button } from './styles';
function Modal({ isOpen, onClose, listData, data, setData }) {
  const [isModify, setIsModify] = useState(false);
  const outsideRef = useRef();
  const closeModal = e => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const modifyOn = () => {
    setIsModify(true);
  };

  const saveList = () => {
    setIsModify(false);
  };

  const cancleModify = () => {
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

  return isOpen ? (
    <ModalContainer onClick={event => event.stopPropagation()}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
        {isModify ? (
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
            <button onClick={saveList}>저장</button>
            <button onClick={cancleModify}>취소</button>
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
