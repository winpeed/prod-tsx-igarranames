import React from "react";
import Body from "../../components/body";
import FooterComp from "../../components/FooterComp";
import NavBar from "../../components/NavBar";
import PrivacyContainer from "../../containers/PrivacyContainer";

function privacy() {
  return (
    <Body>
      <NavBar />
      <PrivacyContainer />
      <FooterComp />
    </Body>
  );
}

export default privacy;
