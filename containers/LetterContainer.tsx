import React, { useEffect, useState } from "react";
import FooterComp from "../components/FooterComp";
import LetterComp from "../components/LetterComp";
import LetterHeaderComp from "../components/LetterHeaderComp";
import SearchResults from "../components/SearchResults";

type Props = {};

const LetterContainer = ({ data, letter }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText("");
  }, [letter]);
  return (
    <>
      <LetterHeaderComp
        data={data}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <SearchResults data={data} letter={letter} searchText={searchText} />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default LetterContainer;
