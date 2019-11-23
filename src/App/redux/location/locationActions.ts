import { RSAA } from 'redux-api-middleware';
import * as types from './locationActionTypes';

export const fetchLocation = (id: number) => ({
  [RSAA]: {
    types: [types.FETCH_LOCATION_REQUEST, types.FETCH_LOCATION_SUCCESS, types.FETCH_LOCATION_FAILURE],
    endpoint: `location/${id}`,
    method: 'GET',
  }
});