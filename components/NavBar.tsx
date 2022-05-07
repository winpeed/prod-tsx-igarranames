import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function NavBar() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setIsShow(true);
      }

      if (window.innerWidth < 900) {
        setIsShow(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsShow(false);
      });
    };
  }, []);
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
        {isShow ? (
          <>
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
                <Link href="/signin" passHref>
                  <Header.NavLink>Sign In</Header.NavLink>
                </Link>
              </Header.NavItem>

              <Header.NavItem>
                <Link href="/donate" passHref>
                  <Header.NavLink name="login">Donate</Header.NavLink>
                </Link>
              </Header.NavItem>
            </Header.NavList>
          </>
        ) : null}
      </Header.Nav>
    </>
  );
}
