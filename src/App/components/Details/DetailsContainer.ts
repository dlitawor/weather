import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../appReducer';
import { TypeOfConnect } from '../../types/redux';
import { fetchLocation } from "../../redux/location/locationActions";
import { Details } from "./Details";

const decorate = connect(
  (state: AppState) => ({
    ...state.location,
  }),
  {
    fetchLocation,
  }
);

export type ConnectedProps = TypeOfConnect<typeof decorate>;

export default compose<React.ComponentType>(decorate)(Details);