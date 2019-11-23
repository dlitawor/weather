import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 88px;
  margin-left: -40px;

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-top: 36px;
    margin-left: -20px;
    
    .recharts-wrapper {
      width: 100% !important;
    }

    svg {
      width: 100%;
    }
  }
`;
