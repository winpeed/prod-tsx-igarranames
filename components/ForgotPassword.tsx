import React, { useState } from "react";
import Link from "next/link";
import Sign from "./sign";
import NavBar from "./NavBar";
import FooterComp from "./FooterComp";
import { auth } from "../src/firebase";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const notifySuccess = () =>
    toast.success("Password reset! Check your mailbox.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      notifySuccess();
      setEmail("");
      setIsShow(!isShow);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <NavBar />
      <Sign>
        <Sign.Card>
          {!isShow ? (
            <Sign.Form onSubmit={handleSubmit}>
              <Sign.MinHeading>Forgot Password</Sign.MinHeading>
              <Sign.Label>Email Address*</Sign.Label>
              <Sign.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Sign.Button>Reset Password</Sign.Button>
            </Sign.Form>
          ) : (
            <Sign.Text color="white">
              Password reset! Check your mailbox.
            </Sign.Text>
          )}
        </Sign.Card>
        <Sign.Wrapper direction="column">
          <Link href="/signin" passHref>
            <Sign.Anchor>Back to log in</Sign.Anchor>
          </Link>
        </Sign.Wrapper>
      </Sign>
      <FooterComp />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ForgotPassword;
