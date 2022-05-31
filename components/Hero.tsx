import React from "react";
import Header from "./header";
import { Result } from "../interfaces/interface";

export default function Hero({ names }: { names: Result[] }) {
  return (
    <Header.ItemWrapper>
      <Header.Heading>
        Over {names.length} Etuno names and counting...
      </Header.Heading>
      <Header.Text>
        Find Etuno names and their English meanings. Listen to native
        pronounciations. Add new names.
      </Header.Text>
    </Header.ItemWrapper>
  );
}
