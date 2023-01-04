import styled from 'styled-components';
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #e9ecef87; */
`;

const Header = styled.header`
  width: 50vw;
  font-size: 50px;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  background-color: gray;
`;

const BoxContainerWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  border-radius: 0.5em;
`;

const BoxContainer = styled.div`
  width: 25vw;
  height: 70vh;
  background-color: green;
  border-radius: 1em;
`;

export { MainContainer, Header, BoxContainerWrapper, BoxContainer };
