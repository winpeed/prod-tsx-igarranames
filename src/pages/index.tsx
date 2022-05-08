import type { NextPage } from "next";
import { getNames } from "./api/v1/names";
import { GetServerSideProps } from "next";
import HomeHeaderContainer from "../../containers/HomeHeaderContainer";
import HomePageContainer from "../../containers/HomePageContainer";
import { ComponentProps } from "../../interfaces/interface";

const IndexPage: NextPage = ({ data }: ComponentProps) => {
  return (
    <>
      <HomeHeaderContainer data={data} />
      <HomePageContainer />
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
