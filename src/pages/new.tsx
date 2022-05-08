import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import LetterComp from "../../components/LetterComp";
import FooterComp from "../../components/FooterComp";
import { getNames } from "./api/v1/names";
import HeaderContainer from "../../containers/HeaderContainer";
import NewNameContainer from "../../containers/NewNameContainer";
import { Result } from "../../interfaces/interface";

type Props = {
  data: Result[];
};

const NewNamePage: NextPage<Props> = ({ data }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
