import { ALL_QUESTION } from '../types';

export const questionReducer = (questions = [], action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ALL_QUESTION: {
      return payload;
    }

    default:
      return questions;
  }
};
