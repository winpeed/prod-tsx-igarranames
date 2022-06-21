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
import { Oval } from "react-loader-spinner";
import NavBar from "./NavBar";
import FooterComp from "./FooterComp";

const SignInForm = () => {
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  const signGoogle = async () => {
    try {
      await signInWithGoogle();
      await Router.push("/new");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { email, password } = userDetails;
    try {
      await signInWithEmailAndPassword(email, password);
      Router.push("/new");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Sign>
        <NavBar />
        {error || error2 ? (
          <>
            <Sign.Card>
              <Sign.Form onSubmit={handleSubmit}>
                <Sign.MinHeading>Log in to your account</Sign.MinHeading>
                <Sign.Text color="yellow">
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

                <Sign.Button media="google" onClick={signGoogle}>
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
            </Sign.Card>
          </>
        ) : loading || loading2 ? (
          <Sign.Wrapper direction="column">
            <Sign.Text>Signing in...</Sign.Text>
            <Oval
              ariaLabel="loading-indicator"
              height={80}
              width={80}
              strokeWidth={5}
              color="yellow"
              secondaryColor="black"
            />
          </Sign.Wrapper>
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
              <Sign.Text color="white">OR</Sign.Text>
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
                <Sign.Button media="google" onClick={signGoogle}>
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
            </Sign.Card>
          </>
        )}
      </Sign>

      <FooterComp />
    </>
  );
};

export default SignInForm;
