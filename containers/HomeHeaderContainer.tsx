import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import { Result } from "../interfaces/interface";

export default function HomeHeaderContainer({ data }: { data: Result[] }) {
  const [names, setNames] = useState<[] | null>([]);
  const [searchText, setSearchText] = useState<string | null>("");

  const getNumberOfNames = async () => {
    try {
      const response = await axios.get("/api/v1/names");
      setNames(response.data.data);
    } catch (err) {
      return new Error(err);
    }
  };

  useEffect(() => {
    getNumberOfNames();
  }, []);

  return (
    <Header>
      <NavBar />
      <Hero />
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
