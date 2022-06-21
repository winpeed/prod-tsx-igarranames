import React, { ComponentProps, useEffect, useState } from "react";
import FooterComp from "../components/FooterComp";
import LetterComp from "../components/LetterComp";
import LetterHeaderComp from "../components/LetterHeaderComp";
import SearchResults from "../components/SearchResults";
import { LetterComponents } from "../interfaces/interface";

const LetterContainer = ({ data, letter }: LetterComponents) => {
  const [searchText, setSearchText] = useState<string | null>("");

  useEffect(() => {
    setSearchText("");
  }, [letter]);
  return (
    <>
      <LetterHeaderComp searchText={searchText} setSearchText={setSearchText} />
      <SearchResults data={data} letter={letter} searchText={searchText} />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default LetterContainer;
