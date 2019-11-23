import styled from "styled-components";
import searchIcon from "../../../assets/search.svg";

export const Wrapper = styled.div`
  padding: 0 24px;
  height: 200px;
  background-color: ${props => props.theme.colors.primary};

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    height: 100%;
  }
`;

export const SearchWrap = styled.div`
  padding: 24px 0 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 126px 0 0;
    max-width: 390px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    padding: 153px 0 0;
  }
`;

export const SearchInput = styled.input`
  max-width: 190px;
  width: 100%;
  margin-right: 24px;
  padding-bottom: 8px;
  background-color: ${props => props.theme.colors.primary};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #fff;

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    max-width: 298px;
    margin-right: 60px;
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
    outline: 0;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const SearchIcon = styled.div`
  width: 42px;
  height: 32px;
  background: url(${searchIcon}) no-repeat center center;
  background-size: 32px;
`;

export const LocationsListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  height: 100px;
  overflow: auto;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: 80px;
    height: auto;
    max-height: 600px;
  }
`;

export const LocationsList = styled.ul`
  max-width: 390px;
  text-align: left;
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const Location = styled.li<{ active: boolean }>`
  padding: 8px 12px;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  cursor: pointer;
  color: #fff;
  background-color: ${props =>
    props.active ? "rgba(255, 255, 255, 0.3)" : "transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const NoResults = styled.span`
  color: #fff;
`;
