import React from "react";
import Sign from "./sign";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const SignUpForm = () => {
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
          <Sign.MinHeading>Create an account</Sign.MinHeading>
          <Sign.Label>Email Address*</Sign.Label>
          <Sign.Input type="email" placeholder="Email" required />
          <Sign.Label>Password*</Sign.Label>
          <Sign.Input type="password" placeholder="Password" required />
          <Sign.Button>Sign Up</Sign.Button>
        </Sign.Form>

        <Sign.Text>OR</Sign.Text>
        <Sign.Wrapper direction="column">
          <Sign.Button media="facebook">
            <FaFacebookSquare
              style={{
                fontSize: "1.2rem",
                padding: "0.1em",
                marginRight: "0.8em",
              }}
            />
            Sign up with Facebook
          </Sign.Button>
          <Sign.Button media="twitter">
            <AiOutlineTwitter
              style={{
                fontSize: "1.2rem",
                padding: "0.1em",
                marginRight: "0.8em",
              }}
            />
            Sign up with Twitter
          </Sign.Button>
          <Sign.Button media="google">
            <IoLogoGoogle
              style={{
                fontSize: "1.2rem",
                padding: "0.1em",
                marginRight: "0.8em",
              }}
            />{" "}
            Sign up with Google
          </Sign.Button>
        </Sign.Wrapper>

        {/* <Sign.Span>
          By continuing, you agree to Igarranames's{" "}
          <Link href="/terms">Terms and Services </Link>,{" "}
          <Link href="/privacy">Privacy and Policy</Link>
        </Sign.Span> */}
      </Sign.Card>
      <Sign.Wrapper direction="column">
        <Link href="/signin" passHref>
          <Sign.Anchor>Already have an account ? Log in. </Sign.Anchor>
        </Link>
        <Link href="/forgot-password" passHref>
          <Sign.Anchor>Forgot Password ? </Sign.Anchor>
        </Link>
      </Sign.Wrapper>
    </Sign>
  );
};

export default SignUpForm;
