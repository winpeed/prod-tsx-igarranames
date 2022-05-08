import React from "react";
import SideBarComp from "../components/SideBarComp";
import Body from "../components/body";
import ArticleComp from "../components/ArticleComp";

export default function NamePageContainer({ data, shareURL }) {
  return (
    <Body.NameWrapper hero="set">
      <ArticleComp data={data} shareURL={shareURL} />
      <SideBarComp />
    </Body.NameWrapper>
  );
}
