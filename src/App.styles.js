import styled from 'styled-components';
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 50vw;
  font-size: 50px;
  margin: 1em 0;
  display: flex;
  justify-content: center;
`;

const BoxContainerWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5em;
`;

const BoxContainer = styled.div`
  width: 25vw;
  height: 70vh;
  border-radius: 1em;
  overflow-y: auto;
  border: 1px solid gray;
`;

const ContainerHeader = styled.div`
  width: 23vw;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  border-radius: 1em;
`;

const ContainerTitle = styled.span`
  font-size: 1.5rem;
  margin: 0.5em;
`;

const ContainerListNumber = styled.div`
  font-size: 1.5rem;
  width: 1.2em;
  height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #afb8c133;
  border-radius: 1em;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 1em;
  .logo {
    margin: 0.7em;
  }
`;

export {
  MainContainer,
  Header,
  BoxContainerWrapper,
  BoxContainer,
  ContainerHeader,
  ContainerTitle,
  ContainerListNumber,
  ListContainer,
  List,
};
