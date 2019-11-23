import styled from 'styled-components';
import spinnerIcon from "../../../../assets/spinner.svg";

export const SpinnerWrap = styled.div`
  @keyframes spin {
    to {transform: rotate(360deg);}
  }

  width: 32px;
  height: 32px;
  background: url(${spinnerIcon})
    no-repeat center center;
  background-size: 32px;
  animation: spin 1.5s ease infinite;
`;