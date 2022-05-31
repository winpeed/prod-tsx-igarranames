import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/index";
import { BsHeartFill } from "react-icons/bs";
import NewsletterComp from "./NewsletterComp";

export default function FooterComp() {
  return (
    <Footer>
      <Footer.Row>
        <Footer.ColWrap>
          <Footer.Column>
            <Footer.Text color="yellow">CONNECT</Footer.Text>
            <Footer.ListItem>
              <Link href="/" passHref>
                <Footer.ListLink>Email</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/names" passHref>
                <Footer.ListLink>Twitter</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/new" passHref>
                <Footer.ListLink>Facebook</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/signin" passHref>
                <Footer.ListLink>Instagram</Footer.ListLink>
              </Link>
            </Footer.ListItem>
          </Footer.Column>
        </Footer.ColWrap>
      </Footer.Row>
      <Footer.Row>
        <Footer.ColWrap>
          <Footer.Column>
            <Footer.Text color="yellow">EXPLORE</Footer.Text>
            <Footer.ListItem>
              <Link href="/" passHref>
                <Footer.ListLink>Home</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/names" passHref>
                <Footer.ListLink>Find Names</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/new" passHref>
                <Footer.ListLink>Add new name(s)</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/signin" passHref>
                <Footer.ListLink>Sign in</Footer.ListLink>
              </Link>
            </Footer.ListItem>
          </Footer.Column>
        </Footer.ColWrap>
      </Footer.Row>
      <Footer.Row>
        <Footer.ColWrap>
          <Footer.Column>
            <Footer.Text color="yellow">IGARRA NAMES</Footer.Text>

            <Footer.ListItem>
              <Link href="/about" passHref>
                <Footer.ListLink>About</Footer.ListLink>
              </Link>
            </Footer.ListItem>

            <Footer.ListItem>
              <Link href="/contact" passHref>
                <Footer.ListLink>Contact</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/privacy-policy" passHref>
                <Footer.ListLink>Privacy Policy</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/donate" passHref>
                <Footer.ListLink>Donate</Footer.ListLink>
              </Link>
            </Footer.ListItem>
          </Footer.Column>
        </Footer.ColWrap>
      </Footer.Row>
      <NewsletterComp color="white" />
      <Footer.Row full="yes">
        <Footer.Text>
          © 2022 Igarra Names. All rights reserved. Built with{" "}
          <BsHeartFill
            style={{
              fill: "red",
              paddingTop: "0.1em",
              margin: "0.5em 0.3em 0em 0.3em",
            }}
          />{" "}
          by <Link href="https://winpeed.com">winpeed.com</Link>
        </Footer.Text>
      </Footer.Row>
    </Footer>
  );
}
