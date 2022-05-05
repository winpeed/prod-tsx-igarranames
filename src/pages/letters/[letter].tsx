import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";
import { getNamesFromLetter } from "../api/v1/letters/[letter]";
import { letters } from "../../../letters";
import LetterContainer from "../../../containers/LetterContainer";

const LetterPage: NextPage = ({ data }) => {
  const router = useRouter();
  const { letter } = router.query;

  return (
    <>
      <Head>
        <title>All names starting with '{letter}' - IgarraNames.com</title>
        <meta
          name="description"
          content={
            "A list of all names starting with `&lsquo` ${letter} `&rsquo`"
          }
        />
        <link rel="icon" href="/ignames.png" />
      </Head>
      <LetterContainer data={data} letter={letter} />
    </>
  );
};

export default LetterPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { letter } = context.params;

  const data = await getNamesFromLetter(letter);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = letters.map((letter) => {
    return {
      params: { letter: `${String(letter.toLowerCase())}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
