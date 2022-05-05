import React from "react";
import NewNameForm from "../components/NewNameForm";
import SideBar from "../components/SideBar";

type Props = {};

const NewNameContainer = (props: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <NewNameForm />
      <SideBar />
    </div>
  );
};

export default NewNameContainer;
