import { GET_ANSWER } from '../types';

export const checkCurrentAnswer = (answer, id) => {

  return {
    type: GET_ANSWER,
    payload: { answer, id },
  };
};
