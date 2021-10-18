import { GET_QUESTION, GET_CURRENT_QUESTION } from '../types';

export const allQuestion = () => {
  return {
    type: GET_QUESTION,
  };
};
export const showQuestion = (id) => {
  return {
    type: GET_CURRENT_QUESTION,
    payload: id,
  };
};
