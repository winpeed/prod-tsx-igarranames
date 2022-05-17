import React from "react";
import ContactForm from "../../components/ContactForm";
import FooterComp from "../../components/FooterComp";
import NavBar from "../../components/NavBar";

export default function contact() {
  return (
    <>
      <NavBar />
      <ContactForm />
      <FooterComp />
    </>
  );
}
