import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";

export default function HeaderContainer() {
  const [names, setNames] = useState<[] | null>([]);
  const [searchText, setSearchText] = useState<string | null>("");

  const getNumberOfNames = async () => {
    const response = await axios.get("/api/v1/names");
    setNames(response.data.data);
  };

  useEffect(() => {
    getNumberOfNames();
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
