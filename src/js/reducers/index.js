import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
import { UPDATE_EDUCATION_INFO } from "../constants/action-types";
import { UPDATE_ACTIVE_TECH_SKILL_TAB } from "../constants/action-types";

const initialState = {
  activeItem: {'item': 'home'},
  educationInfo: {'info': ''},
  activeTechSkillTab: {'index': 0}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case UPDATE_EDUCATION_INFO:
      return { ...state, educationInfo: action.payload };
    case UPDATE_ACTIVE_TECH_SKILL_TAB:
      return { ...state, activeTechSkillTab: action.payload };
    default:
      return state;
  }
};
export default rootReducer;