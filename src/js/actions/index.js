import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
import { UPDATE_EDUCATION_INFO } from "../constants/action-types";
import { UPDATE_GITHUB_REPOS } from "../constants/action-types";

export const updateActiveItem = activeItem => ({ type: UPDATE_ACTIVE_ITEM, payload: activeItem });
export const updateEducationInfo = educationInfo => ({ type: UPDATE_EDUCATION_INFO, payload: educationInfo });
export const updateGithubRepos = githubRepos => ({ type: UPDATE_GITHUB_REPOS, payload: githubRepos });
