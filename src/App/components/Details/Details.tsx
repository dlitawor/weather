import React, { useEffect } from "react";
import { ConnectedProps } from "./DetailsContainer";
import * as S from "./Details.syles";
import { weekDays, months } from "../../dictionaries/time";
import { Chart } from "./Chart/Chart";
import { Spinner } from "../shared/Spinner/Spinner";

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

  const weatherData = consolidated_weather.map((item: any) => {
    const valuesToRound = ["the_temp", "max_temp", "min_temp", "wind_speed"];
    const roundedValues = valuesToRound.map(key => ({
      [key]: Math.round(item[key])
    }));

    const data = {
      ...item,
      applicable_date: item.applicable_date.slice(5)
    };

    return Object.assign({}, data, ...roundedValues);
  });

  const current = weatherData[0];

  return (
    <S.Wrapper>
      {!loading ? (
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
                <S.Value>{current.the_temp}&deg;</S.Value>
                <S.SideInfo>{current.weather_state_name}</S.SideInfo>
              </S.SideInfoWrap>
            </S.InfoWrap>
          </S.MainPanel>
          <S.SubPanel>
            <S.InfoWrap>
              <S.Label>Max</S.Label>
              <S.Value>{current.max_temp}&deg;</S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Min</S.Label>
              <S.Value>{current.min_temp}&deg;</S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Rain</S.Label>
              <S.Value>
                {current.predictability}
                <S.Unit>%</S.Unit>
              </S.Value>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Label>Wind</S.Label>
              <S.Value>
                {current.wind_speed}
                <S.Unit>km/h</S.Unit>
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
