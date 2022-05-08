import type { NextPage } from "next";
import Head from "next/head";
import FooterComp from "../../../components/FooterComp";
import LetterComp from "../../../components/LetterComp";
import HeaderContainer from "../../../containers/HeaderContainer";
import { GetServerSideProps } from "next";
import { Result } from "../../../interfaces/interface";
import { getNames } from "../api/v1/names";

type Props = {
  data: Result[];
};

const LettersPage: NextPage<Props> = ({ data }) => {
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
      <HeaderContainer data={data} />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default LettersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
