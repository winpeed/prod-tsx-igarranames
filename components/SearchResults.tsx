import React from "react";
import Body from "./body";
import Link from "next/link";

const SearchResults = ({ data, letter, searchText }) => {
  const filteredResult = data.filter(
    (item: { fields: { engName: string } }) => {
      if (searchText === "") {
        return item;
      } else if (
        item.fields.engName.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return item;
      }
    }
  );

  return (
    <Body.Main>
      <Body.SearchSection>
        {data.length == 0 && searchText == "" ? (
          <Body.SearchHeading>
            No names starting with <Body.SearchSpan>'{letter}'</Body.SearchSpan>
          </Body.SearchHeading>
        ) : searchText == "" ? (
          <>
            <Body.SearchHeading>
              All names starting with{" "}
              <Body.SearchSpan>'{letter}'</Body.SearchSpan>
            </Body.SearchHeading>

            <Body.UnorderedList>
              {filteredResult.map((item: { id: any; fields: any }) => {
                const { id, fields } = item;
                return (
                  <Body.ListItem>
                    <Link href={`/names/${fields.name}`} passHref key={id}>
                      {fields.name}
                    </Link>
                  </Body.ListItem>
                );
              })}
            </Body.UnorderedList>
          </>
        ) : filteredResult.length == 0 ? (
          <Body.SearchHeading> No results found</Body.SearchHeading>
        ) : null}

        <Body.UnorderedList>
          {searchText !== "" &&
            filteredResult.map((item: { id: any; fields: any }) => {
              const { id, fields } = item;
              return (
                <Body.ListItem key={id}>
                  <Link href={`/names/${fields.name}`} passHref>
                    {fields.name}
                  </Link>
                </Body.ListItem>
              );
            })}
        </Body.UnorderedList>
      </Body.SearchSection>

      <Body.SearchButtonWrapper>
        <Link href="/new">
          <Body.Button media="blue"> Add Name(s)</Body.Button>
        </Link>
      </Body.SearchButtonWrapper>
    </Body.Main>
  );
};

export default SearchResults;
