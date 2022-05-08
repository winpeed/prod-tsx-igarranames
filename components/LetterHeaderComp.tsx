import React, { useState, useEffect } from "react";
import Header from "./header";
import NavBar from "./NavBar";
import NameSearchForm from "./NameSearchForm";

export default function LetterHeaderComp({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: Function;
}) {
  return (
    <Header>
      <NavBar />
      <NameSearchForm
        searchText={searchText}
        onSetText={({ target }: { target: HTMLInputElement }) =>
          setSearchText(target.value)
        }
      />
    </Header>
  );
}
