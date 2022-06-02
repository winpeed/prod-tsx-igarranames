import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import axios from "axios";
import { add } from "../src/features/search/searchSlice";
import Sidebar from "../components/sidebar/index";
import NewsletterComp from "./NewsletterComp";
import { Oval } from "react-loader-spinner";
import Sign from "./sign";

const SideBarComp = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [popularNames, setPopularNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const items = useAppSelector((state) => state.search.value);
  const uniqueItems = [...new Set(items)];

  useEffect(() => {
    setSearchItems(uniqueItems);
  }, [items]);

  const [names, setNames] = useState<[] | null>([]);

  useEffect(() => {
    const getNumberOfNames = async () => {
      try {
        const response = await axios.get("/api/v1/names");
        const sortedData = await response.data.data.sort(
          (
            a: { fields: { modified: string | number | Date } },
            b: { fields: { modified: string | number | Date } }
          ) =>
            new Date(b.fields.modified).getTime() -
            new Date(a.fields.modified).getTime()
        );
        setNames(sortedData);
        setIsLoading(false);
      } catch (err) {
        return new Error(err);
      }
    };

    getNumberOfNames();
  }, []);

  const dispatch = useAppDispatch();

  const handleSearch = (uniqueName: string) => {
    addPopularName(uniqueName);
    dispatch(add(uniqueName));
  };

  const addPopularName = async (name: string) => {
    const headers = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch("/api/v1/popular", {
        method: "post",
        headers,
        body: JSON.stringify({ Name: name }),
      });
      const data = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  const recentlyAdded =
    names.length !== 0 &&
    names.slice(0, 10).map((item) => {
      const {
        id,
        fields: { name },
      } = item;
      return (
        <Link href={`/names/${name}`} passHref key={id}>
          <Sidebar.Anchor onClick={() => handleSearch(name)}>
            <Sidebar.ListItem>{name}</Sidebar.ListItem>
          </Sidebar.Anchor>
        </Link>
      );
    });

  const userSearches =
    searchItems.length !== 0 &&
    searchItems.map((item, index) => {
      return (
        <Link href={`/names/${item}`} passHref key={index}>
          <Sidebar.Anchor onClick={() => handleSearch(item)}>
            <Sidebar.ListItem>{item}</Sidebar.ListItem>
          </Sidebar.Anchor>
        </Link>
      );
    });

  const popularSearches =
    popularNames.length !== 0 &&
    popularNames.slice(0, 10).map((item) => {
      return (
        <Link href={`/names/${item.name}`} passHref key={item.name}>
          <Sidebar.Anchor onClick={() => handleSearch(item)}>
            <Sidebar.ListItem>{item.name}</Sidebar.ListItem>
          </Sidebar.Anchor>
        </Link>
      );
    });

  const getPopularNames = () => {
    fetch("/api/v1/popular")
      .then((response) => response.json())
      .then((data) => {
        setPopularNames(data.data);
      });
  };

  useEffect(() => {
    getPopularNames();
  }, []);

  return (
    <>
      {isLoading ? (
        <Sign.Wrapper direction="column">
          <Oval
            ariaLabel="loading-indicator"
            height={60}
            width={60}
            strokeWidth={5}
            color="yellow"
            secondaryColor="black"
          />
        </Sign.Wrapper>
      ) : (
        <Sidebar>
          {popularNames.length !== 0 && (
            <>
              <Sidebar.Heading>Popular names (10)</Sidebar.Heading>
              <Sidebar.List> {popularSearches}</Sidebar.List>
            </>
          )}

          {names.length !== 0 && (
            <>
              <Sidebar.Heading>
                Recently Added ({names.length == 0 ? 0 : 10})
              </Sidebar.Heading>
              <Sidebar.List>{recentlyAdded}</Sidebar.List>
            </>
          )}

          {searchItems.length !== 0 && (
            <>
              <Sidebar.Heading>
                Recent Searches (
                {searchItems.length == 0 ? 0 : searchItems.length})
              </Sidebar.Heading>
              <Sidebar.List>{userSearches}</Sidebar.List>
            </>
          )}

          <NewsletterComp color="black" />
        </Sidebar>
      )}
    </>
  );
};

export default SideBarComp;
