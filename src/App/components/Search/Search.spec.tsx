import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../../theme";
import { Search } from "./Search";

jest.useFakeTimers();

describe("<Search />", () => {
  it("list should render correctly", () => {
    const findLocations = jest.fn();
    const fetchLocation = jest.fn();

    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Search
          data={[{ title: "city", woeid: 123 }]}
          loading={false}
          findLocations={findLocations}
          fetchLocation={fetchLocation}
        />
      </ThemeProvider>
    );

    const searchInput = getByPlaceholderText("Find weather by city");
    fireEvent.change(searchInput, { target: { value: "another city" } });
    expect(setTimeout).toHaveBeenCalledTimes(2);

    const listItem = getByText("city");
    fireEvent.click(listItem);
    expect(fetchLocation).toHaveBeenCalled();

    expect(getByText('city')).toBeTruthy();
  });
});
