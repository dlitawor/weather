import { combineReducers } from "redux";
import { locationsReducer as locations } from "./redux/locations/locationsReducer";
import { locationReducer as location } from "./redux/location/locationReducer";

export const appReducer = combineReducers({ locations, location });
export type AppState = ReturnType<typeof appReducer>;