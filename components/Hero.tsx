import React from "react";
import Header from "./header";
import CountUp from "react-countup";

type Props = {};

export default function Hero(props: Props) {
  return (
    <Header.ItemWrapper>
      <Header.Heading>
        Over {""}
        {/* <CountUp end={data.length} duration={2} /> */}
        {""} Etuno names and counting...
      </Header.Heading>
      <Header.Text>
        Find Etuno names and their English meanings. Listen to native
        pronounciations. Add new names.
      </Header.Text>
    </Header.ItemWrapper>
  );
}
