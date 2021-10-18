
import { useSelector } from 'react-redux';
import QuestionList from '../QuestionList/QuestionList';

function TopicList() {
  const topic = useSelector((state) => state.topic);
  const score = useSelector((state) => state.value);

  return (
    <div>
      {topic.map((el) => (
        <tr>
          <th id={el.id} scope="row">
            {el.title}
          </th>
          <QuestionList id={el.id} />
        </tr>
      ))}
      <h3> Your score: {score} </h3>
    </div>
  );
}

export default TopicList;
