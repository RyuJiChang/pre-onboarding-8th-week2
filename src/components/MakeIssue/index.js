import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalContainer, ModalBackdrop, ModalView, Button } from './styles';
function MakeIssue({ isOpen, onClose, setData, data }) {
  const outsideRef = useRef();

  const closeModal = e => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const createList = e => {
    e.preventDefault();
    let title = e.target[0].value;
    let listState = ['todo', 'inProgress', 'done'][
      [e.target[1].checked, e.target[2].checked, e.target[3].checked].indexOf(true)
    ];
    let manager = e.target[4].value;
    let expiryDate = e.target[5].value;
    let contents = e.target[6].value;
    let submitData = { title, contents, expiryDate, listState, manager, id: data.idNow++ };
    let newData;
    if (listState === 'todo') {
      newData = {
        todoArr: [...data.todoArr, submitData],
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      };
    } else if (listState === 'inProgress') {
      newData = {
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr, submitData],
        doneArr: [...data.doneArr],
        idNow: data.idNow,
      };
    } else if (listState === 'done') {
      newData = {
        todoArr: [...data.todoArr],
        inProgressArr: [...data.inProgressArr],
        doneArr: [...data.doneArr, submitData],
        idNow: data.idNow,
      };
    }
    setData(newData);
    localStorage.setItem('IssueData', JSON.stringify(newData));
  };

  return isOpen ? (
    <ModalContainer onClick={event => event.stopPropagation()}>
      <ModalBackdrop ref={outsideRef} onClick={closeModal}>
        <ModalView>
          <div onSubmit={createList}>
            <form>
              <div>
                <span>제목 : </span> <input type="text" />
              </div>
              <div>
                <span>상태 : </span>
                <input id="Todo" name="state" type="radio" />
                Todo
                <input id="InProgress" name="state" type="radio" />
                In Progress
                <input id="Done" name="state" type="radio" />
                Done
              </div>
              <div>
                <span>관리자 : </span> <input type="text" />
              </div>
              <div>
                <span>마감일 : </span> <input type="datetime-local" />
              </div>
              <div>
                <span>내용 : </span> <textarea />
              </div>
              <input type="submit" />
            </form>
          </div>
          <Button onClick={onClose}>
            <GrClose />
          </Button>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  ) : null;
}

export default MakeIssue;
