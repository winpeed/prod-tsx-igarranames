import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function FooterComp() {
  return (
    <Footer>
      <Footer.Row>
        {" "}
        <Footer.Logo>
          <Image
            src="/ignames.png"
            alt="Igarra Names Logo"
            width={25}
            height={25}
          />
          <Footer.Span>Igarranames.</Footer.Span>
        </Footer.Logo>
        <Link href="/" passHref>
          <Footer.ListLink>hi@igarranames.com</Footer.ListLink>
        </Link>
        <Footer.RowWrap>
          <Link href="/" passHref>
            <Footer.ListLink>
              <FaTwitterSquare />
            </Footer.ListLink>
          </Link>
          <Link href="/" passHref>
            <Footer.ListLink>
              <FaFacebookSquare />
            </Footer.ListLink>
          </Link>
          <Link href="/" passHref>
            <Footer.ListLink>
              <FaInstagramSquare />
            </Footer.ListLink>
          </Link>
        </Footer.RowWrap>
      </Footer.Row>
      <Footer.Row>
        <Footer.ColWrap>
          <Footer.Column>
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
              <Link href="/login" passHref>
                <Footer.ListLink>Log in</Footer.ListLink>
              </Link>
            </Footer.ListItem>
          </Footer.Column>
        </Footer.ColWrap>
      </Footer.Row>
      <Footer.Row>
        <Footer.ColWrap>
          <Footer.Column>
            <Footer.ListItem>
              <Link href="/contact" passHref>
                <Footer.ListLink>Contact</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/donate" passHref>
                <Footer.ListLink>Donate</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/privacy" passHref>
                <Footer.ListLink>Privacy Policy</Footer.ListLink>
              </Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link href="/ads" passHref>
                <Footer.ListLink>Ads</Footer.ListLink>
              </Link>
            </Footer.ListItem>
          </Footer.Column>
        </Footer.ColWrap>
      </Footer.Row>
      <Footer.Row full="true">
        <Footer.ColWrap full="true">
          <Footer.ColHead>Subscribe to our newsletter</Footer.ColHead>
          <Footer.Text>
            Stay up to date with the latest news, announcements, and articles.
          </Footer.Text>
        </Footer.ColWrap>

        <Footer.Form>
          <Footer.Input type="email" placeholder="Enter your email" required />
          <Footer.Button>Subscribe</Footer.Button>
        </Footer.Form>
      </Footer.Row>
      <Footer.Row full="yes">
        <Footer.Text>
          © 2022 Igarra Names. All rights reserved. Built by{" "}
          <Link href="https://winpeed.com">winpeed.com</Link>
        </Footer.Text>
      </Footer.Row>
    </Footer>
  );
}
