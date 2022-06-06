import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import LetterComp from "../../components/LetterComp";
import FooterComp from "../../components/FooterComp";
import { getNames } from "./api/v1/names";
import HeaderContainer from "../../containers/HeaderContainer";
import NewNameContainer from "../../containers/NewNameContainer";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Result } from "../../interfaces/interface";
import SignInForm from "../../components/SignInForm";
import Body from "../../components/body";
import { Oval } from "react-loader-spinner";

type Props = {
  data: Result[];
  user: any;
};

const NewNamePage: NextPage<Props> = ({ data }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Body>
        <Body.Wrapper align="center">
          <Body.Heading>Loading...</Body.Heading>
          <Oval
            ariaLabel="loading-indicator"
            height={80}
            width={80}
            strokeWidth={5}
            color="yellow"
            secondaryColor="black"
          />
        </Body.Wrapper>
      </Body>
    );
  }
  if (!user) {
    return <SignInForm />;
  }

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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await getNames();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      data,
    },
  };
};
