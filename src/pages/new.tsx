import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import LetterComp from "../../components/LetterComp";
import FooterComp from "../../components/FooterComp";
import { getNames } from "./api/v1/names";
import HeaderContainer from "../../containers/HeaderContainer";
import NewNameContainer from "../../containers/NewNameContainer";

const NewNamePage: NextPage = ({ data }) => {
  return (
    <>
      <HeaderContainer data={data} />
      <NewNameContainer />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default NewNamePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
