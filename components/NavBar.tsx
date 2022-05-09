import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
import { text } from "../src/features/search/searchSlice";

export default function NavBar() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const textValue = useAppSelector((state) => state.search.text);
  const dispatch = useAppDispatch();

  const handleShow = () => {
    if (!isShow) {
      setIsShow(true);
      dispatch(text(""));
    } else if (isShow) {
      setIsShow(false);
      dispatch(text(""));
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsShow(true);
    }

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
        <Link href="/" passHref>
          <Header.NavLink>
            <Image
              src="/ignames.png"
              alt="Igarra Names Logo"
              width={30}
              height={30}
            />
            <Header.Logo>Igarranames</Header.Logo>
          </Header.NavLink>
        </Link>

        <Header.Span onClick={handleShow}>
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
                  <Header.NavLink name="donate">Donate</Header.NavLink>
                </Link>
              </Header.NavItem>
            </Header.NavList>
          </>
        ) : null}
      </Header.Nav>
    </>
  );
}
