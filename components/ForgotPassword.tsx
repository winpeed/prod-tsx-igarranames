import React from "react";
import Link from "next/link";
import Sign from "./sign";
import NavBar from "./NavBar";
import FooterComp from "./FooterComp";

const ForgotPassword = () => {
  return (
    <>
      <NavBar />
      <Sign>
        <Sign.Card>
          <Sign.Form>
            <Sign.MinHeading>Forgot Password</Sign.MinHeading>
            <Sign.Label>Email Address*</Sign.Label>
            <Sign.Input type="email" placeholder="Email" required />
            <Sign.Button>Reset Password</Sign.Button>
          </Sign.Form>
        </Sign.Card>
        <Sign.Wrapper direction="column">
          <Link href="/signin" passHref>
            <Sign.Anchor>Back to log in</Sign.Anchor>
          </Link>
        </Sign.Wrapper>
      </Sign>
      <FooterComp />
    </>
  );
};

export default ForgotPassword;
