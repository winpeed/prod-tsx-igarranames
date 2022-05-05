import type { NextPage } from "next";
import Head from "next/head";
import FooterComp from "../../../components/FooterComp";
import LetterComp from "../../../components/LetterComp";
import HeaderContainer from "../../../containers/HeaderContainer";

const LettersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>List of all Igarra names - IgarraNames.com</title>
        <meta
          name="description"
          content="A list of all Igarra Names in the directory and search result for names"
        />
        <link rel="icon" href="/ignames.png" />
      </Head>
      <HeaderContainer />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default LettersPage;
