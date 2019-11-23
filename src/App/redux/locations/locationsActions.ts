import { RSAA } from 'redux-api-middleware';
import * as types from './locationsActionTypes';

export const findLocations = (query: string) => ({
  [RSAA]: {
    types: [types.FIND_LOCATIONS_REQUEST, types.FIND_LOCATIONS_SUCCESS, types.FIND_LOCATIONS_FAILURE],
    endpoint: `location/search/?query=${query}`,
    method: 'GET',
  }
});