import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getNames } from "../api/v1/names";
import { Result } from "../../../interfaces/interface";
import HeaderContainer from "../../../containers/HeaderContainer";
import LetterComp from "../../../components/LetterComp";
import FooterComp from "../../../components/FooterComp";

type Props = {
  data: Result[];
};

const NamesPage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>List of all Igarra names - Igarranames.com</title>
        <meta
          name="description"
          content="A directory of Igarra Names. Search for new Igarra names"
        />
        <link rel="icon" href="/ignames.png" />
      </Head>
      <HeaderContainer data={data} />
      <LetterComp />

      <FooterComp />
    </>
  );
};

export default NamesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
