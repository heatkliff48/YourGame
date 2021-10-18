import './App.css';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allTopic } from './redux/actions/topicAction';
import { allQuestion } from './redux/actions/questionAction';
import ModalQuestion from './components/ModalQuestion/ModalQuestion';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTopic());
    dispatch(allQuestion());
  }, []);

  return (
    <Container fluid>
      <NavBar />
      <ModalQuestion />
      <Switch>
        <Route exact path="/test" component={LoginForm} />
        <Route exact path="/" component={Form} />
      </Switch>
    </Container>
  );
}

export default App;
