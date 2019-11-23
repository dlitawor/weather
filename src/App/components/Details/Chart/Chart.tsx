import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import * as S from "./Chart.styles";
import { ChartProps } from "./Chart.types";

export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <S.Wrap>
      <LineChart width={600} height={200} data={data}>
        <Line type="monotone" dataKey="the_temp" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="applicable_date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </S.Wrap>
  );
};
