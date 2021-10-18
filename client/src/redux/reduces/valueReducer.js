import { SET_VALUE } from '../types';

export const valueReducer = (value = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_VALUE: {
      return (value += Number(payload));
    }

    default:
      return value;
  }
};
