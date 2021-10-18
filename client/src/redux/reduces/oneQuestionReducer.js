import { SHOW_QUESTION } from '../types';

export const oneQuestionReducer = (oneQuestion = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_QUESTION: {
      return payload;
    }

    default:
      return oneQuestion;
  }
};
