import { SET_MODAL } from '../types';

export const setModal = (bool) => {
  return {
    type: SET_MODAL,
    payload: bool,
  };
};
