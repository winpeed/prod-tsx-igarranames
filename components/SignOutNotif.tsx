import React from "react";
import Body from "./body";

const SignOutNotif = ({ logout, setIsNavShow, isNavShow }) => {
  return (
    <Body.BannerWrapper color="black">
      <Body.Text align="center" color="white">
        Are you sure you want to sign out?
      </Body.Text>
      <Body.Banner>
        <Body.Button media="cancel" onClick={logout}>
          Yes
        </Body.Button>
        <Body.Button media="green" onClick={() => setIsNavShow(!isNavShow)}>
          Cancel
        </Body.Button>
      </Body.Banner>
    </Body.BannerWrapper>
  );
};

export default SignOutNotif;
