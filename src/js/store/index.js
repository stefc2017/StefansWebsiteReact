import { createStore } from "redux";
import rootReducer from "../reducers/index";

/**************************************
 * store -> orchestrates all the moving parts. The state of the whole application lives inside the store
 * createStore -> function for creating the reduc store
 * reducers -> produces the state. Its just a javascript function that takes 2 parameters, current state and an action
 **************************************/ 
const store = createStore(rootReducer);
export default store;