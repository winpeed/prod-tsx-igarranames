import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./header";
import { add } from "../src/features/search/searchSlice";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import { BsSearch } from "react-icons/bs";
import { Result } from "../interfaces/interface";

interface FormContainerProps {
  searchText: string | null;
  names: Result[];
  setSearchText: any;
}

export default function SearchForm({
  searchText,
  names,
  setSearchText,
}: FormContainerProps) {
  const dispatch = useAppDispatch();

  const handleSearch = (uniqueName: string) => {
    dispatch(add(uniqueName));
  };

  const results = names
    .filter((item: Result) => {
      if (searchText === "") {
        return item;
      } else if (
        item.fields.engName.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return item;
      }
    })
    .slice(0, 5);
  return (
    <>
      <Header.Form
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          event.preventDefault();
        }}
      >
        <Header.FormWrapper>
          <BsSearch style={{ margin: "0em" }} />
          <Header.Input
            type="text"
            placeholder="Search Names..."
            onChange={setSearchText}
            value={searchText}
          />
        </Header.FormWrapper>
      </Header.Form>
      {searchText == "" ? null : results.length !== 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            alignItems: "flex-start",
            padding: "1.2em 2em 1.2em 2em",
            maxWidth: "580px",
            margin: "-2em auto 2em auto",
          }}
        >
          {results.map((item: Result) => {
            const {
              id,
              fields: { name },
            } = item;
            return (
              <Link href={`/names/${name}`} key={id} passHref>
                <Header.NavLink color="true" onClick={() => handleSearch(name)}>
                  {name}
                </Header.NavLink>
              </Link>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            alignItems: "flex-start",
            padding: "1.2em 2em 1.2em 2em",
            maxWidth: "580px",
            margin: "-2em auto 2em auto",
          }}
        >
          No results found...
        </div>
      )}
    </>
  );
}
