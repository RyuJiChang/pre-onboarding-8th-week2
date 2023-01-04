import {} from './styles';
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
          Title : {listData.title}
          <br />
          Status : {listData.listState}
          <br />
          Manager : {listData.manager}
          <br />
          Expiry Date : {listData.expiryDate}
          <br />
          Content : {listData.contents}
          <Button onClick={onClose}>
            <GrClose />
          </Button>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default Modal;
