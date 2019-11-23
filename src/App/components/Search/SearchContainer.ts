import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../appReducer';
import { TypeOfConnect } from '../../types/redux';
import { findLocations } from "../../redux/locations/locationsActions";
import { fetchLocation } from "../../redux/location/locationActions";
import { Search } from "./Search";

const decorate = connect(
  (state: AppState) => ({
    ...state.locations,
  }),
  {
    findLocations,
    fetchLocation,
  }
);

export type ConnectedProps = TypeOfConnect<typeof decorate>;

export default compose<React.ComponentType>(decorate)(Search);