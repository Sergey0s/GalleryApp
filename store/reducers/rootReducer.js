import {combineReducers} from "redux";
import dataReducer from "./dataReducer.js";

export const rootReducer = combineReducers({
    data: dataReducer});