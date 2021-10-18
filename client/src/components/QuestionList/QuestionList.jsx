import { useSelector } from 'react-redux';

import QuestionItem from '../QuestionItem/QuestionItem';

function QuestionList({ id }) {
  const questions = useSelector((state) => state.questions);

  const topicQuestions = questions.filter((el) => el.topicId === id);


  return (
    <div>
      {topicQuestions.map((el) => (
        <>
          <QuestionItem el={el} id={id} />
        </>
      ))}
    </div>
  );
}

export default QuestionList;
