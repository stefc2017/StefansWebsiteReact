import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";
import { UPDATE_EDUCATION_INFO } from "../constants/action-types";
import { UPDATE_ACTIVE_TECH_SKILL_TAB } from "../constants/action-types";
import { UPDATE_LANGUAGE_INFO } from "../constants/action-types";
import { UPDATE_TECHNFRAMEWORK_INFO } from "../constants/action-types";
import { UPDATE_OS_INFO } from "../constants/action-types";
import { UPDATE_SOFTWARE_INFO } from "../constants/action-types";

export const updateActiveItem = activeItem => ({ type: UPDATE_ACTIVE_ITEM, payload: activeItem });
export const updateEducationInfo = educationInfo => ({ type: UPDATE_EDUCATION_INFO, payload: educationInfo });
export const updateActiveTechSkillTab = activeTechSkillTab => ({ type: UPDATE_ACTIVE_TECH_SKILL_TAB, payload: activeTechSkillTab });
export const updateLanguageInfo = languageInfo => ({ type: UPDATE_LANGUAGE_INFO, payload: languageInfo });
export const updateTechNFrameworkInfo = techNFrameworkInfo => ({ type: UPDATE_TECHNFRAMEWORK_INFO, payload: techNFrameworkInfo });
export const updateOSInfo = osInfo => ({ type: UPDATE_OS_INFO, payload: osInfo });
export const updateSoftwareInfo = softwareInfo => ({ type: UPDATE_SOFTWARE_INFO, payload: softwareInfo });