import Link from "next/link";
import React from "react";
import Body from "./body";
import { letters } from "../letters";
import { useRouter } from "next/router";

export default function LetterComp() {
  const router = useRouter();
  const { letter } = router.query;

  return (
    <Body.Section color="true">
      <Body.Heading>Names listed alphabetically : </Body.Heading>
      <Body.LetterWrapper>
        {letters.map((item) => {
          return (
            <Link href={`/letters/${item.toLowerCase()}`} passHref key={item}>
              <Body.Links
                selected
                style={{
                  background:
                    item.toLowerCase() == letter ? "#e28d05" : "white",
                  color:
                    item.toLowerCase() == letter ? "black" : "rgb(22 87 181)",
                }}
              >
                {item.toLowerCase()}
              </Body.Links>
            </Link>
          );
        })}
      </Body.LetterWrapper>
    </Body.Section>
  );
}
