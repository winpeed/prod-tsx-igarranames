import React from "react";
import Body from "../../components/body";
import FooterComp from "../../components/FooterComp";
import NavBar from "../../components/NavBar";

function about() {
  return (
    <Body>
      <NavBar />
      <Body.PrivacyWrapper>
        <Body.ContactHeading>About Igarra Names</Body.ContactHeading>
      </Body.PrivacyWrapper>

      <FooterComp />
    </Body>
  );
}

export default about;
