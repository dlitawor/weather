import styled from 'styled-components';
import {default as BaseGrid} from "styled-components-grid";

export const Wrapper = styled.div`
  height: 100%;
  box-shadow: -3px 0 32px -12px #000;
`;

export const Grid = styled(BaseGrid)`
  padding: 36px 42px;
  justify-content: center;
  
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: flex-start;
    padding: 80px 42px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    padding: 80px 104px;
  }
`;

export const LocationName = styled.h1`
  display: block;
  position: relative;
  font-size: 48px;
  font-weight: 900;
  margin: 0;
  color: ${props => props.theme.colors['grayDark']};
  
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 96px;
    left: -5px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    font-size: 146px;
    left: -9px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors['grayDark']};
  
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    margin-bottom: 74px;
    font-size: 20px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: flex-start;
  }
`;

export const InfoWrap = styled.div`
  margin-right: 16%;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    margin-right: 112px;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export const Label = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.theme.colors['grayLight']};
  font-weight: 400;
`;

export const Value = styled.div`
  color: ${props => props.theme.colors['grayDark']};
  font-size: 24px;
  font-weight: 500;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 40px;
  }
`;

export const Unit = styled.span`
  font-size: 12px;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`;

export const SideInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SideInfo = styled.div`
  padding-left: 56px;
  text-transform: uppercase;
  color: ${props => props.theme.colors['grayLight']};
  font-size: 20px;
  font-weight: 400;
`;

export const MainPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 74px;
  width: 100%;
  
  ${InfoWrap} {
    margin-right: 0;
  }
  
  ${Label} {
    margin-bottom: 8px;
  }
  
  ${Value} {
    border-right: 1px solid ${props => props.theme.colors['grayLight']};
    font-size: 54px;
    padding-right: 56px;
    font-weight: 700;
    line-height: 42px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: flex-start;
  }
`;

export const SubPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  ${Label} {
    font-size: 10px;
    
    @media (min-width: ${props => props.theme.breakpoints.sm}px) {
      font-size: 14px;  
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: flex-start;
  }
`;

export const SpinnerWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
