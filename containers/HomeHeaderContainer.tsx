import React, { useState, useEffect } from "react";
import Header from "../components/header";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Result } from "../interfaces/interface";

export default function HomeHeaderContainer({ data }: { data: Result[] }) {
  const [names, setNames] = useState<Result[] | null>([]);
  const [searchText, setSearchText] = useState<string | null>("");

  useEffect(() => {
    setNames(data);
  }, []);

  return (
    <Header>
      <NavBar />
      <Hero names={names} />
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
