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

type Props = {
  data: Result[];
  user: any;
};

const NewNamePage: NextPage<Props> = ({ data }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Body>
        <Body.Heading>Loading...</Body.Heading>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getNames();

  return {
    props: {
      data,
    },
  };
};
