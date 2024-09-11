import {
  COUNTER_ACTION_ADD_NUMBER,
  COUNTER_ACTION_DECREASEMENT,
  COUNTER_ACTION_INCREMENT,
} from "./counter-type";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COUNTER_ACTION_INCREMENT:
      //   const cloneState = { ...state };
      //   cloneState.count += 1;
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNTER_ACTION_DECREASEMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case COUNTER_ACTION_ADD_NUMBER:
      return {
        ...state,
        count: state.count + action?.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
