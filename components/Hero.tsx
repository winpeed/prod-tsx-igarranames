import React from "react";
import Header from "./header";
import { Result } from "../interfaces/interface";
import CountUp from "react-countup";

export default function Hero({ names }: { names: Result[] }) {
  return (
    <Header.ItemWrapper>
      <Header.Heading>
        Over {""}
        <CountUp end={names.length} duration={1} />
        {""} Etuno names and counting...
      </Header.Heading>
      <Header.Text>
        Find Etuno names and their English meanings. Listen to native
        pronounciations. Add new names.
      </Header.Text>
    </Header.ItemWrapper>
  );
}
