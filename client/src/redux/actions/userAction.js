import axios from 'axios';
import { ADD_USER, DEL_USER } from '../types';

export const addUser = (data) => async (dispatch) => {
  await axios.post('http://localhost:3001/user', { data });
  localStorage.setItem('name', data.name);
  dispatch({
    type: ADD_USER,
    payload: data,
  });
};
export const delUser = (data) => async (dispatch) => {
  await axios.delete('http://localhost:3001/user/del', { data });
  localStorage.removeItem('name');
  dispatch({
    type: DEL_USER,
    payload: false,
  });
};
