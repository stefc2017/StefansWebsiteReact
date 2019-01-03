import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
import { UPDATE_EDUCATION_INFO } from "../constants/action-types";
import { UPDATE_GITHUB_REPOS } from "../constants/action-types";

const initialState = {
  activeItem: {'item': 'home'},
  educationInfo: {'info': ''},
  githubRepos: {'repos': ''}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case UPDATE_EDUCATION_INFO:
      return { ...state, educationInfo: action.payload };
    case UPDATE_GITHUB_REPOS:
      return { ...state, githubRepos: action.payload };
    default:
      return state;
  }
};
export default rootReducer;