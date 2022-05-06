import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { getName } from "../api/v1/names/[name]";
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";
import { getNames } from "../api/v1/names";
import HeaderContainer from "../../../containers/HeaderContainer";
import LetterComp from "../../../components/LetterComp";
import FooterComp from "../../../components/FooterComp";
import NamePageContainer from "../../../containers/NamePageContainer";

const NamePage: NextPage = ({ data }) => {
  const { name, meaning, card } = data.fields;

  const router = useRouter();
  const { asPath } = router;

  const shareURL = `https:/igarranames.com${asPath}`;

  console.log(data.fields);
  return (
    <>
      <Head>
        {" "}
        <title>Meaning of {name} | Igarranames.com</title>
        <link rel="icon" href="/ignames.png" />
        <meta name="description" content={meaning} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@igarranames" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={meaning} />
        <meta name="twitter:creator" content="@igarranames" />
        {/* <meta name="twitter:image" content={`${card[0].url}`} /> */}
        <meta property="og:title" content={name} key="ogtitle" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareURL} key="ogurl" />
        {/* <meta property="og:image" content={`${card[0].url}`} key="ogimage" /> */}
        <meta property="og:description" content={meaning} key="ogdesc" />
        <meta property="og:site_name" content="Igarra Names" key="ogsitename" />
      </Head>
      <HeaderContainer data={data} />
      <NamePageContainer data={data} shareURL={shareURL} />
      <LetterComp />
      <FooterComp />
    </>
  );
};

export default NamePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params;
  const data = await getName(name);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = await getNames();

  const paths = data
    .filter((item) => item.fields.meaning !== undefined)
    .map((item) => {
      return {
        params: { name: `${String(item.fields.name)}` },
      };
    });

  return {
    paths,
    fallback: false,
  };
};
