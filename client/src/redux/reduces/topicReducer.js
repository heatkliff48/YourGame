import { ALL_TOPIC } from '../types';

export const topicReducer = (topic = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_TOPIC: {
      return payload;
    }

    default:
      return topic;
  }
};
