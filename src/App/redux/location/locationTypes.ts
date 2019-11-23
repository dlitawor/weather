export type WeatherType = {
  min_temp: number;
  max_temp: number;
  the_temp: number;
  predictability: number;
  wind_speed: number;
  weather_state_name: string;
  applicable_date: string;
}

type DetailsType = {
  title: string;
  time: Date;
  consolidated_weather: WeatherType[];
}

export type State = {
  data: DetailsType;
  loading: boolean;
}