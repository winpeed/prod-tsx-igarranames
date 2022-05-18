import React, { useState, useEffect } from "react";
import Header from "../components/header";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";
import { Result } from "../interfaces/interface";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import { name } from "../src/features/search/searchSlice";

export default function HeaderContainer({ data }: { data: Result[] }) {
  const [names, setNames] = useState<Result[] | null>([]);

  const dispatch = useAppDispatch();
  const allNames = useAppSelector((state) => state.search.names);

  useEffect(() => {
    const fetchNames = () => {
      fetch(" http://localhost:3000/api/v1/names")
        .then((response) => response.json())
        .then((names) => {
          dispatch(name(names.data));
          setNames(allNames);
        });
    };

    fetchNames();
  }, []);

  return (
    <Header>
      <NavBar />
      <SearchForm names={data} />
    </Header>
  );
}
