import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import { IAppProps } from "./LetterComp";

export default function NavBar(props: IAppProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Header.Nav>
        <Header.Logo>
          <Image
            src="/ignames.png"
            alt="Igarra Names Logo"
            width={30}
            height={30}
          />
          <Header.Span>Igarranames.</Header.Span>
        </Header.Logo>
        <Header.Span onClick={() => setIsShow(!isShow)}>
          {isShow ? (
            <Image src="/close.svg" alt="Close" width={20} height={20} />
          ) : (
            <Image
              src="/hamburger.svg"
              alt="Hamburger"
              width={30}
              height={30}
            />
          )}
        </Header.Span>
      </Header.Nav>
      {isShow ? (
        <Header.NavList>
          <Header.NavItem>
            <Link href="/" passHref>
              <Header.NavLink>Home</Header.NavLink>
            </Link>
          </Header.NavItem>
          <Header.NavItem>
            <Link href="/names" passHref>
              <Header.NavLink>All names</Header.NavLink>
            </Link>
          </Header.NavItem>
          <Header.NavItem>
            <Link href="/new" passHref>
              <Header.NavLink>Add Name(s)</Header.NavLink>
            </Link>
          </Header.NavItem>

          <Header.NavItem>
            <Link href="/login" passHref>
              <Header.NavLink>Log In</Header.NavLink>
            </Link>
          </Header.NavItem>

          <Header.NavItem>
            <Link href="/donate" passHref>
              <Header.NavLink>Donate</Header.NavLink>
            </Link>
          </Header.NavItem>
        </Header.NavList>
      ) : null}
    </>
  );
}
