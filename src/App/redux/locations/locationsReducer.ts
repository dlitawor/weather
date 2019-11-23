import { handleActions } from "redux-actions";
import * as types from "./locationsActionTypes";
import { State } from "./locationsTypes";

const initialState: State = {
  data: [],
  loading: false,
};

export const locationsReducer = handleActions(
  {
    [types.FIND_LOCATIONS_REQUEST]: (state) => ({
      ...state,
      loading: true
    }),
    [types.FIND_LOCATIONS_SUCCESS]: (state, { payload }: any) => ({
      ...state,
      data: payload,
      loading: false
    }),
    [types.FIND_LOCATIONS_FAILURE]: (state, { payload }: any) => ({
      ...state,
      data: payload,
      loading: false,
    }),
  },
  initialState,
);
