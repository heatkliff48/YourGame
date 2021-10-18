import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modalAction';
import { showQuestion } from '../../redux/actions/oneQuestionAction';

function QuestionItem({ el, id }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [vizibility, setVizibility] = useState('visible');
  return (
    <td
      style={{ visibility: `${vizibility}` }}
      onClick={() => {
        dispatch(setModal(!modal));
        dispatch(showQuestion(el.id, id));
        setVizibility('hidden');
      }}
      id={el.id}
    >
      {el.value}
    </td>
  );
}
export default QuestionItem;
