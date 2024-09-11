import {
  COUNTER_ACTION_DECREASEMENT,
  COUNTER_ACTION_INCREMENT,
} from "./counter-type";

export const increaseCounter = () => {
  return {
    type: COUNTER_ACTION_INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: COUNTER_ACTION_DECREASEMENT,
  };
};
