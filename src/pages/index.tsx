import type { NextPage } from "next";
import { getNames } from "./api/v1/names";
import { GetServerSideProps } from "next";
import { createContext } from "react";

import HomeHeaderContainer from "../../containers/HomeHeaderContainer";
import HomePageContainer from "../../containers/HomePageContainer";

const NameContext = createContext();

const IndexPage: NextPage = ({ data }) => {
  return (
    <NameContext.Provider value={data}>
      <HomeHeaderContainer data={[]} />
      <HomePageContainer data={[]} />
    </NameContext.Provider>
  );
};

export default IndexPage;

export { NameContext };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
