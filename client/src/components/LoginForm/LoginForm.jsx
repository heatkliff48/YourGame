import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions/userAction';
import { useHistory} from 'react-router-dom'

export const LoginForm = () => {
  const dicpatch = useDispatch()
  const history = useHistory()

  const addHandler = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    dicpatch(addUser(data))
    history.push('/')
  }

  return (
    <Form inline onSubmit={addHandler}  >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Name</Label>
        <Input type="text" name="name" id="exampleEmail" placeholder="Введите имя" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="***" />
      </FormGroup>
      <Button>Зарегистрироваться</Button>
    </Form>
  );
}


