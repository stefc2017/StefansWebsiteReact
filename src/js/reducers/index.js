/**************************************
 * 
 **************************************/ 
import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
const initialState = {
  activeItem: ''
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    default:
      return state;
  }
};
export default rootReducer;