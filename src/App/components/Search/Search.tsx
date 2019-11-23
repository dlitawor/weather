import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "debounce";
import { ConnectedProps } from "./SearchContainer";
import * as S from "./Search.styles";
import { Spinner } from "../shared/Spinner/Spinner";
import { DEFAULT_CITY_ID } from "../Details/Details";

export const Search: React.FC<ConnectedProps> = ({
  findLocations,
  fetchLocation,
  data,
  loading
}) => {
  const [query, setQuery] = useState();
  const [active, setActive] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setActive({ [DEFAULT_CITY_ID]: true });
  }, [setActive]);

  const debouncedFindLocations = useCallback(
    debounce((value: string) => {
      if (value.length !== 0) {
        setQuery(value);
        findLocations(value);
      }
    }, 750),
    []
  );

  const handleChange = (e: React.FormEvent) => {
    const eventTarget = e.target as HTMLInputElement;
    debouncedFindLocations(eventTarget.value);
  };

  const handleShowDetails = (woeid: number) => {
    fetchLocation(woeid);
    setActive({ [woeid]: true });
  };

  return (
    <S.Wrapper>
      <S.SearchWrap>
        <S.SearchInput
          type="text"
          placeholder="Find weather by city"
          onChange={handleChange}
        />
        <S.SearchIcon />
      </S.SearchWrap>
      <S.LocationsListWrap>
        {!loading ? (
          <S.LocationsList>
            {data.map(item => (
              <S.Location
                key={item.woeid}
                onClick={() => handleShowDetails(item.woeid)}
                active={active[item.woeid]}
              >
                {item.title}
              </S.Location>
            ))}
            {data.length === 0 && query ? (
              <S.NoResults>Nothing found</S.NoResults>
            ) : null}
          </S.LocationsList>
        ) : (
          <Spinner />
        )}
      </S.LocationsListWrap>
    </S.Wrapper>
  );
};
