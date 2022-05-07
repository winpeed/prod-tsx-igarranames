import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sign from "./sign";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <Sign>
      <Link href="/" passHref>
        <Sign.Anchor>
          <Sign.Wrapper>
            <Image
              src="/ignames.png"
              alt="Igarra Names Logo"
              width={30}
              height={30}
            />
            <Sign.Heading>Igarranames.com</Sign.Heading>
          </Sign.Wrapper>
        </Sign.Anchor>
      </Link>
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
  );
};

export default ForgotPassword;
