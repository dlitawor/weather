import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../../theme";
import { Details } from "./Details";

describe("<Details />", () => {
  it("details should render correctly", () => {
    const fetchLocation = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Details
          data={{
            title: "xyz",
            time: new Date(),
            consolidated_weather: [
              {
                min_temp: 1,
                max_temp: 2,
                the_temp: 3,
                predictability: 4,
                wind_speed: 5,
                weather_state_name: "foo",
                applicable_date: "11-11"
              }
            ]
          }}
          loading={false}
          fetchLocation={fetchLocation}
        />
      </ThemeProvider>
    );

    expect(fetchLocation).toBeCalled();

    expect(getByText('xyz')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
    expect(getByText('foo')).toBeTruthy();
  });
});
