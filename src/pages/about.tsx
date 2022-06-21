import React from "react";
import Body from "../../components/body";
import FooterComp from "../../components/FooterComp";
import NavBar from "../../components/NavBar";
import AboutContainer from "../../containers/AboutContainer";

function about() {
  return (
    <Body>
      <NavBar />
      <AboutContainer />
      <FooterComp />
    </Body>
  );
}

export default about;
