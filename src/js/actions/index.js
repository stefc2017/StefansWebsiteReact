/**************************************
 * 
 **************************************/ 
import { UPDATE_ACTIVE_ITEM } from "../constants/action-types";

export const updateActiveItem = activeItem => ({ type: UPDATE_ACTIVE_ITEM, payload: activeItem });