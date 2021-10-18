import { SET_VALUE } from '../types';

const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value,
  };
};
export default setValue;
