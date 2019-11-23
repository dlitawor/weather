import { isRSAA, RSAA } from 'redux-api-middleware';
import { getEnvironmentVar } from '../utils/getEnvironmentVar';

interface EndpointsConfig {
  endpoint: string;
}

const prefixesExcludedFromAPI = ['http://', 'https://'];

const prepareEndpoint = (endpoint: string) => {
  if (prefixesExcludedFromAPI.some(prefix => endpoint.startsWith(prefix))) {
    return endpoint;
  } else {
    return getEnvironmentVar('REACT_APP_WEATHER_API') + endpoint;
  }
};

export const endpointMiddleware = () => (next: (action: any) => void) => (action: any) => {
  if (!isRSAA(action)) {
    return next(action);
  }

  const apiMiddleware = action[RSAA];

  return next({
    [RSAA]: {
      ...apiMiddleware,
      endpoint: prepareEndpoint(apiMiddleware.endpoint)
    }
  });
};
