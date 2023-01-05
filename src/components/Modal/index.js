import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalContainer, ModalBackdrop, ModalView, Button } from './styles';
function Modal({ isOpen, onClose, listData }) {
  let dataForChange = { ...listData };
  const outsideRef = useRef();

  const closeModal = e => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };
  const dateHandler = e => {
    console.log(e.target.value);
  };
  return isOpen ? (
    <ModalContainer onClick={event => event.stopPropagation()}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
        <ModalView>
          Title : {dataForChange.title}
          <br />
          Status : {dataForChange.listState}
          <br />
          Manager : <input type="text" value={dataForChange.manager} />
          <br />
          Expiry Date :
          <input type="datetime-local" onChange={dateHandler} />
          <br />
          Content : {dataForChange.contents}
          <Button onClick={onClose}>
            <GrClose />
          </Button>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default Modal;
