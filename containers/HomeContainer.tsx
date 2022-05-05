import React from "react";
import Body from "../components/body";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

export default function HomeContainer() {
  return (
    <Body>
      <Body.Wrapper>
        <Body.Card>
          <AiOutlineFileSearch style={{ fontSize: "2.5rem" }} />
          <Body.Heading>Find an Igarra name</Body.Heading>
          <Body.Text>
            From a directory of over 300 names, search for Igarra (Etuno) names,
            their meanings and accurate pronounciations of the names.
          </Body.Text>
          <Link href="/names" passHref>
            <Body.Links>
              Find Name(s){" "}
              <BsArrowRight
                style={{ marginLeft: "1em", marginTop: "0.25em" }}
              />
            </Body.Links>
          </Link>
        </Body.Card>

        <Body.Card>
          <MdOutlineLibraryAdd style={{ fontSize: "2.5rem" }} />
          <Body.Heading>New names?</Body.Heading>
          <Body.Text>
            Help populate the directory with etuno names and their meanings.
          </Body.Text>
          <Link href="/new" passHref>
            <Body.Links>
              Add New Name(s){" "}
              <BsArrowRight
                style={{ marginLeft: "1em", marginTop: "0.25em" }}
              />
            </Body.Links>
          </Link>
        </Body.Card>
      </Body.Wrapper>
    </Body>
  );
}
