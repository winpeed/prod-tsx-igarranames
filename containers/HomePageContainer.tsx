import * as React from "react";
import FooterComp from "../components/FooterComp";
import HomeContainer from "./HomeContainer";
import LetterComp from "../components/LetterComp";

export default function HomePageContainer() {
  return (
    <>
      <LetterComp />
      <HomeContainer />
      <FooterComp />
    </>
  );
}
