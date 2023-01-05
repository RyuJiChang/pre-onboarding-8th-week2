import styled from 'styled-components';

const ModalContainer = styled.div``;
const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ModalView = styled.div`
  width: 45vw;
  height: 60%;
  border-radius: 1em;
  border-radius: 1em;
  font-size: 1rem;
  background-color: white;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  /* margin-right: 13.5vw;
  margin-top: 21vh; 
  75vw*/
  margin-right: 28.5vw;
  margin-top: 21vh;
  background-color: white;
  height: 2.5em;
  width: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
`;

export { ModalContainer, ModalBackdrop, ModalView, Button };
