type Location = {
  title: string;
  woeid: number;
}

export type State = {
  data: Location[],
  loading: boolean,
}