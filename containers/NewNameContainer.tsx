import React from "react";
import Body from "../components/body";
import NewNameForm from "../components/NewNameForm";
import SideBarComp from "../components/SideBarComp";

const NewNameContainer = () => {
  return (
    <Body.NameWrapper>
      <NewNameForm />
      <SideBarComp />
    </Body.NameWrapper>
  );
};

export default NewNameContainer;
