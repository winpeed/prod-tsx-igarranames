import React, { useState, useEffect } from "react";
import Sign from "./sign";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../src/firebase";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import Router from "next/router";
import NavBar from "./NavBar";

const SignUpForm = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    const { email, password } = userDetails;
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    Router.push("/new");
  };

  useEffect(() => {}, []);

  if (error) {
    return (
      <Sign>
        <Sign.Card>
          <Sign.Text>Enter correct email address / password.</Sign.Text>
        </Sign.Card>
      </Sign>
    );
  }

  if (loading) {
    return (
      <Sign>
        <Sign.Text>Loading...</Sign.Text>
      </Sign>
    );
  }

  return (
    <Sign>
      <NavBar />

      <Sign.Card>
        <Sign.Form onSubmit={handleSubmit}>
          <Sign.MinHeading>Create an account</Sign.MinHeading>
          <Sign.Label>Email Address*</Sign.Label>
          <Sign.Input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <Sign.Label>Password*</Sign.Label>
          <Sign.Input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
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
          <Sign.Button media="google">
            <IoLogoGoogle
              style={{
                fontSize: "1.2rem",
                padding: "0.1em",
                marginRight: "0.8em",
              }}
            />
            Sign up with Google
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
