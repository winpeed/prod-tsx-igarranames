import React from "react";
import Body from "../../components/body";
import FooterComp from "../../components/FooterComp";
import NavBar from "../../components/NavBar";

function donate() {
  return (
    <Body>
      <NavBar />
      <Body.PrivacyWrapper>
        <Body.ContactHeading>Donate</Body.ContactHeading>
      </Body.PrivacyWrapper>
      <FooterComp />
    </Body>
  );
}

export default donate;
