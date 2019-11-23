import styled, { createGlobalStyle } from "styled-components";
import GridBase from "styled-components-grid";

export const GlobalStyle = createGlobalStyle`
  html, body, #root, .grid-wrap {
    height: 100vh;
  }
`;

export const DetailsGrid = styled(GridBase.Unit)`
  height: calc(100% - 200px);
  
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    height: auto;
  }
`;
