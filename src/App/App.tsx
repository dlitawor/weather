import React from "react";
import Grid from "styled-components-grid";
import SearchContainer from "./components/Search/SearchContainer";
import DetailsContainer from "./components/Details/DetailsContainer";
import * as S from "./App.style";

const App: React.FC = () => {
  return (
    <Grid className="grid-wrap">
      <S.GlobalStyle />
      <Grid.Unit size={{ xs: 1, md: 1 / 3 }}>
        <SearchContainer />
      </Grid.Unit>
      <S.DetailsGrid size={{ xs: 1, md: 2 / 3 }} className="details-grid">
        <DetailsContainer />
      </S.DetailsGrid>
    </Grid>
  );
};

export default App;
