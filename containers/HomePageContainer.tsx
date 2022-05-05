import * as React from "react";
import { Result } from "../interfaces/interface";
import FooterComp from "../components/FooterComp";
import HomeContainer from "./HomeContainer";
import LetterComp from "../components/LetterComp";

export default function HomePageContainer({ data }: { data: Result[] }) {
  return (
    <>
      <LetterComp />
      <HomeContainer />
      <FooterComp />
    </>
  );
}
