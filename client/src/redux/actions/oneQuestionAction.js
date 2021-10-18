import { GET_CURRENT_QUESTION } from '../types';

export const showQuestion = (idQ, idT) => {
  return {
    type: GET_CURRENT_QUESTION,
    payload: { topicId: idT, id: idQ },
  };
};
