import React, { useState, useEffect } from "react";
import Header from "../components/header";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";
import { Result } from "../interfaces/interface";

export default function HeaderContainer({ data }: { data: Result[] }) {
  const [names, setNames] = useState<Result[] | null>([]);
  const [searchText, setSearchText] = useState<string | null>("");

  useEffect(() => {
    setNames(data);
  }, []);

  return (
    <Header>
      <NavBar />
      <SearchForm
        searchText={searchText}
        names={names}
        setSearchText={({ target }: { target: HTMLInputElement }) =>
          setSearchText(target.value)
        }
      />
    </Header>
  );
}
