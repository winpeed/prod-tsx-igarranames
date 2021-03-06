import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useAppDispatch } from "../src/app/hooks";
import { text } from "../src/features/search/searchSlice";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import SignOutNotif from "./SignOutNotif";

export default function NavBar() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);
  const [isNavShow, setIsNavShow] = useState(false);

  const dispatch = useAppDispatch();

  const logout = () => {
    setIsNavShow(!isNavShow);
    signOut(auth);
    Router.push("/");
  };

  const handleShow = () => {
    if (!isShow) {
      setIsShow(true);
      dispatch(text(""));
    } else if (isShow) {
      setIsShow(false);
      dispatch(text(""));
    }
  };

  const handleShowListener = () => {
    if (window.innerWidth > 900) {
      setIsShow(true);
    }

    if (window.innerWidth < 900) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsShow(true);
    }

    window.addEventListener("resize", handleShowListener);

    return () => {
      window.removeEventListener("resize", handleShowListener);
    };
  }, [isShow]);

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
            <Header.Logo>Igarra Names</Header.Logo>
          </Header.NavLink>
        </Link>

        <Header.Span onClick={handleShow}>
          {isShow ? (
            <GiCrossMark
              style={{ width: "25px", height: "25px" }}
              fill="white"
            />
          ) : (
            <GiHamburgerMenu
              style={{ width: "25px", height: "25px" }}
              fill="white"
            />
          )}
        </Header.Span>

        {isShow ? (
          <Header.NavList>
            <Header.NavListContent>
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
            </Header.NavListContent>

            <Header.NavListContent>
              {user ? (
                <Header.NavItem>
                  <Header.NavLink
                    onClick={() => {
                      setIsShow(!isShow);
                      setIsNavShow(!isNavShow);
                    }}
                    name="login"
                  >
                    Sign Out
                  </Header.NavLink>
                </Header.NavItem>
              ) : (
                <Header.NavItem>
                  <Link href="/signin" passHref>
                    <Header.NavLink name="login">Sign In</Header.NavLink>
                  </Link>
                </Header.NavItem>
              )}

              <Header.NavItem>
                <Link href="/donate" passHref>
                  <Header.NavLink name="donate">Donate</Header.NavLink>
                </Link>
              </Header.NavItem>
            </Header.NavListContent>
          </Header.NavList>
        ) : null}
      </Header.Nav>

      {isNavShow && (
        <SignOutNotif
          logout={logout}
          setIsNavShow={setIsNavShow}
          isNavShow={isNavShow}
        />
      )}
    </>
  );
}
