import Image from "next/image";
import React, { useState } from "react";
import Sign from "./sign";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../src/firebase";
import Router from "next/router";
import Link from "next/link";
import NavBar from "./NavBar";

const SignInForm = () => {
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

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
    signInWithEmailAndPassword(email, password);
    Router.push("/new");
  };

  const handleGoogle = () => {
    console.log("Goodle stuff");
  };

  return (
    <Sign>
      <NavBar />
      {error ? (
        <>
          <Sign.Card>
            <Sign.Form onSubmit={handleSubmit}>
              <Sign.MinHeading>Log in to your account</Sign.MinHeading>
              <Sign.Text color="red">
                Enter correct email address/password.
              </Sign.Text>
              <Sign.Label>Email Address*</Sign.Label>
              <Sign.Input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                value={userDetails.email}
              />
              <Sign.Label>Password*</Sign.Label>
              <Sign.Input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
                value={userDetails.password}
              />
              <Sign.Button>Log in</Sign.Button>
            </Sign.Form>

            <Sign.Text>OR</Sign.Text>
            <Sign.Wrapper direction="column">
              <Sign.Button media="facebook" onClick={handleGoogle}>
                {" "}
                <FaFacebookSquare
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />
                Continue with Facebook
              </Sign.Button>

              <Sign.Button media="google" onClick={handleGoogle}>
                {" "}
                <IoLogoGoogle
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />{" "}
                Continue with Google
              </Sign.Button>
              <Sign.Button media="twitter" onClick={handleGoogle}>
                <AiOutlineTwitter
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />
                Handle Stuff
              </Sign.Button>
            </Sign.Wrapper>

            {/* <Sign.Span>
         By continuing, you agree to Igarranames's{" "}
         <Link href="/terms">Terms and Services </Link>,{" "}
         <Link href="/privacy">Privacy and Policy</Link>
       </Sign.Span> */}
          </Sign.Card>
          <Sign.Wrapper direction="column" width="small">
            <Link href="/signup" passHref>
              <Sign.Anchor>
                Not on Igarranames.com yet? Create an account.
              </Sign.Anchor>
            </Link>

            <Link href="/forgot-password" passHref>
              <Sign.Anchor>Forgot Password? </Sign.Anchor>
            </Link>
          </Sign.Wrapper>
        </>
      ) : loading ? (
        <Sign.Text>Signing in...</Sign.Text>
      ) : user ? (
        Router.push("/new")
      ) : (
        <>
          <Sign.Card>
            <Sign.Form onSubmit={handleSubmit}>
              <Sign.MinHeading>Log in to your account</Sign.MinHeading>
              <Sign.Label>Email Address*</Sign.Label>
              <Sign.Input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                value={userDetails.email}
              />
              <Sign.Label>Password*</Sign.Label>
              <Sign.Input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
                value={userDetails.password}
              />
              <Sign.Button>Log in</Sign.Button>
            </Sign.Form>

            <Sign.Text>OR</Sign.Text>
            <Sign.Wrapper direction="column">
              <Sign.Button media="facebook">
                {" "}
                <FaFacebookSquare
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />
                Continue with Facebook
              </Sign.Button>
              <Sign.Button media="google">
                {" "}
                <IoLogoGoogle
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />{" "}
                Continue with Google
              </Sign.Button>
              <Sign.Button media="twitter">
                <AiOutlineTwitter
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.1em",
                    marginRight: "0.8em",
                  }}
                />
                Continue with Twitter
              </Sign.Button>
            </Sign.Wrapper>

            {/* <Sign.Span>
          By continuing, you agree to Igarranames's{" "}
          <Link href="/terms">Terms and Services </Link>,{" "}
          <Link href="/privacy">Privacy and Policy</Link>
        </Sign.Span> */}
          </Sign.Card>
          <Sign.Wrapper direction="column" width="small">
            <Link href="/signup" passHref>
              <Sign.Anchor>
                Not on Igarranames.com yet? Create an account.
              </Sign.Anchor>
            </Link>

            <Link href="/forgot-password" passHref>
              <Sign.Anchor>Forgot Password? </Sign.Anchor>
            </Link>
          </Sign.Wrapper>
        </>
      )}
    </Sign>
  );
};

export default SignInForm;
