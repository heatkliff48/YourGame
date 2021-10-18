// import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modalAction';
import { useState } from 'react';
import { checkCurrentAnswer } from '../../redux/actions/checkAnswerAction';

const ModalQuestion = (props) => {
  const { className } = props;
  const [answer, setAnswer] = useState('');
  
  const modal = useSelector((state) => state.modal);
  const currentQuestion = useSelector((state) => state.oneQuestion);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={() => {
          dispatch(setModal(!modal));
          setAnswer('');
        }}
        className={className}
      >
        <ModalHeader
          toggle={() => {
            dispatch(setModal(!modal));
            setAnswer('');
          }}
        >
          Вопрос за {currentQuestion.value}
        </ModalHeader>
        <ModalBody>{currentQuestion.question}</ModalBody>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              dispatch(setModal(!modal));
              dispatch(checkCurrentAnswer(answer, currentQuestion.id));
              setAnswer('');
            }}
          >
            Check Answer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalQuestion;
