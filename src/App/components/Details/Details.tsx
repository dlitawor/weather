import React, { useEffect } from "react";
import { ConnectedProps } from "./DetailsContainer";
import * as S from "./Details.syles";
import { weekDays, months } from "../../dictionaries/time";
import { Chart } from "./Chart/Chart";
import { Spinner } from "../shared/Spinner/Spinner";
import { WeatherType } from "../../redux/location/locationTypes";

export const DEFAULT_CITY_ID = 44418;

export const Details: React.FC<ConnectedProps> = ({
  data,
  loading,
  fetchLocation
}) => {
  useEffect(() => {
    fetchLocation(DEFAULT_CITY_ID);
  }, [fetchLocation]);

  const { title, time, consolidated_weather } = data;
  const date = new Date(time);

  const weatherData =
    consolidated_weather &&
    consolidated_weather.map((item: WeatherType) => {
      const keys = Object.keys(item);
      const values = Object.values(item);

      const roundedValues = values.map(value =>
        typeof value === "number" ? Math.round(value) : value
      );

      const finalObj = keys.map((key, index) => ({
        [key]: roundedValues[index],
        applicable_date: item.applicable_date.slice(5)
      }));

      return Object.assign({}, ...finalObj);
    });

  const current = weatherData && weatherData[0];

  return (
    <S.Wrapper>
      {!loading && current ? (
        <S.Grid>
          <S.LocationName>{title}</S.LocationName>
          <S.Date>
            {`${weekDays[date.getDay()]}, ${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()}`}
          </S.Date>
          <S.MainPanel>
            <S.InfoWrap>
              <S.Label>Now</S.Label>
              <S.SideInfoWrap>
                <S.Value>
                  {current.the_temp}
                  {"\u00b0"}
                </S.Value>
                <S.SideInfo>{current.weather_state_name}</S.SideInfo>
              </S.SideInfoWrap>
            </S.InfoWrap>
          </S.MainPanel>
          <S.SubPanel>
            <S.InfoWrap>
              <S.Label>Max</S.Label>
              <S.Value>
                {current.max_temp}
                <S.Unit>{"\u00b0"}</S.Unit>
              </S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Min</S.Label>
              <S.Value>
                {current.min_temp}
                <S.Unit>{"\u00b0"}</S.Unit>
              </S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Rain</S.Label>
              <S.Value>
                {current.predictability}
                <S.UnitSmall>%</S.UnitSmall>
              </S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Wind</S.Label>
              <S.Value>
                {current.wind_speed}
                <S.UnitSmall>km/h</S.UnitSmall>
              </S.Value>
            </S.InfoWrap>
          </S.SubPanel>
          <Chart data={weatherData} />
        </S.Grid>
      ) : (
        <S.SpinnerWrap>
          <Spinner />
        </S.SpinnerWrap>
      )}
    </S.Wrapper>
  );
};
