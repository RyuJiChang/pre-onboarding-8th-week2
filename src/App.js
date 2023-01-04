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
} from './App.styles';

function App() {
  return (
    <MainContainer>
      <Header>Issue Tracking Service</Header>
      <BoxContainerWrapper>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>Todo</ContainerTitle>
            <ContainerListNumber>1</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>{' '}
            <List>
              <FaRegPauseCircle className="logo" />
              123
            </List>
          </ListContainer>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>In Progress</ContainerTitle>
            <ContainerListNumber>3</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            <List>
              <FaRegPlayCircle className="logo" /> 123
            </List>
            <List>
              <FaRegPlayCircle className="logo" /> 123
            </List>
            <List>
              <FaRegPlayCircle className="logo" /> 123
            </List>
            <List>
              <FaRegPlayCircle className="logo" /> 123
            </List>
          </ListContainer>
        </BoxContainer>
        <BoxContainer>
          <ContainerHeader>
            <ContainerTitle>Done</ContainerTitle>
            <ContainerListNumber>5</ContainerListNumber>
          </ContainerHeader>
          <ListContainer>
            <List>
              <FaRegCheckCircle className="logo" /> 123
            </List>
            <List>
              <FaRegCheckCircle className="logo" /> 123
            </List>
            <List>
              <FaRegCheckCircle className="logo" /> 123
            </List>
            <List>
              <FaRegCheckCircle className="logo" /> 123
            </List>
          </ListContainer>
        </BoxContainer>
      </BoxContainerWrapper>
    </MainContainer>
  );
}

export default App;
