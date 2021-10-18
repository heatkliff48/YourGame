import { ADD_USER, DEL_USER } from "../types";

export const userReducer = (user = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER: {
      return payload;
    }
    case DEL_USER: {
      return payload;
    }
    default:
      return user;
  }
};
