import { handleActions } from "redux-actions";
import * as types from "./locationActionTypes";
import { State } from "./locationTypes";

const initialState: State = {
  data: {
    title: '',
    time: new Date(),
    consolidated_weather: [
      {
        min_temp: 0,
        max_temp: 0,
        the_temp: 0,
        predictability: 0,
        wind_speed: 0,
        weather_state_name: "",
        applicable_date: ""
      }
    ]
  },
  loading: false,
};

export const locationReducer = handleActions(
  {
    [types.FETCH_LOCATION_REQUEST]: state => ({
      ...state,
      loading: true
    }),
    [types.FETCH_LOCATION_SUCCESS]: (state, { payload }: any) => ({
      ...state,
      data: payload,
      loading: false
    }),
    [types.FETCH_LOCATION_FAILURE]: (state, { payload }: any) => ({
      ...state,
      data: payload,
      loading: false,
    })
  },
  initialState
);
