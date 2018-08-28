import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
import { UPDATE_EDUCATION_INFO } from "../constants/action-types";
import { UPDATE_ACTIVE_TECH_SKILL_TAB } from "../constants/action-types";
import { UPDATE_LANGUAGE_INFO } from "../constants/action-types";
import { UPDATE_TECHNFRAMEWORK_INFO } from "../constants/action-types";
import { UPDATE_OS_INFO } from "../constants/action-types";
import { UPDATE_SOFTWARE_INFO } from "../constants/action-types";

const initialState = {
  activeItem: {'item': 'home'},
  educationInfo: {'info': ''},
  activeTechSkillTab: {'index': 0},
  languageInfo: {'info': ''},
  techNFrameworkInfo: {'info': ''},
  osInfo: {'info': ''},
  softwareInfo: {'info': ''}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case UPDATE_EDUCATION_INFO:
      return { ...state, educationInfo: action.payload };
    case UPDATE_ACTIVE_TECH_SKILL_TAB:
      return { ...state, activeTechSkillTab: action.payload };
    case UPDATE_LANGUAGE_INFO:
      return { ...state, languageInfo: action.payload };
    case UPDATE_TECHNFRAMEWORK_INFO:
      return { ...state, techNFrameworkInfo: action.payload };
    case UPDATE_OS_INFO:
      return { ...state, osInfo: action.payload };
    case UPDATE_SOFTWARE_INFO:
      return { ...state, softwareInfo: action.payload };
    default:
      return state;
  }
};
export default rootReducer;