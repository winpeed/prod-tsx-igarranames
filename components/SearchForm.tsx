import React, { useState } from "react";
import Link from "next/link";
import Header from "./header";
import { add, text } from "../src/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import { BsSearch } from "react-icons/bs";
import { Result } from "../interfaces/interface";

interface FormContainerProps {
  names: Result[];
}

export default function SearchForm({ names }: FormContainerProps) {
  const dispatch = useAppDispatch();

  const textValue = useAppSelector((state) => state.search.text);

  const handleSearch = (uniqueName: string) => {
    dispatch(add(uniqueName));
    dispatch(text(""));
  };

  const handleChange = (event) => {
    dispatch(text(event.target.value));
  };

  const results =
    names &&
    names
      .filter((item: Result) => {
        if (textValue === "") {
          return item;
        } else if (
          item.fields.engName.toLowerCase().includes(textValue.toLowerCase())
        ) {
          return item;
        }
      })
      .slice(0, 5);
  return (
    <>
      {textValue == "" ? null : results.length !== 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            alignItems: "flex-start",
            padding: "1.2em 2em 1.2em 2em",
            maxWidth: "580px",
            margin: "0em auto -2em",
            zIndex: "3",
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
            margin: "-0em auto -2em",
            zIndex: "3",
          }}
        >
          No results found...
        </div>
      )}
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
            onChange={handleChange}
            value={textValue}
          />
        </Header.FormWrapper>
      </Header.Form>
    </>
  );
}
