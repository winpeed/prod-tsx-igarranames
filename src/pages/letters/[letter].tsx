import React from "react";
import { useRouter } from "next/router";
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";
import { getNamesFromLetter } from "../api/v1/letters/[letter]";
import { letters } from "../../../letters";
import LetterContainer from "../../../containers/LetterContainer";
import { LetterComponents } from "../../../interfaces/interface";

const LetterPage: NextPage<LetterComponents> = ({ data }) => {
  const router = useRouter();
  const { letter }: { letter?: string } = router.query;

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
  const { letter }: { letter?: string } = context.params;

  const data = await getNamesFromLetter(letter);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
