import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalContainer, ModalBackdrop, ModalView, Button } from './styles';
function Modal({ isOpen, onClose, listData }) {
  const outsideRef = useRef();
  const closeModal = e => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContainer onClick={event => event.stopPropagation()}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
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
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default Modal;
