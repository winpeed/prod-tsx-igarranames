import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import axios from "axios";
import { add } from "../src/features/search/searchSlice";
import Sidebar from "../components/sidebar/index";
import NewsletterComp from "./NewsletterComp";

const SideBarComp = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [popularNames, setPopularNames] = useState([]);

  const items = useAppSelector((state) => state.search.value);
  const uniqueItems = [...new Set(items)];

  useEffect(() => {
    setSearchItems(uniqueItems);
  }, [items]);

  const [names, setNames] = useState<[] | null>([]);

  const getNumberOfNames = async () => {
    try {
      const response = await axios.get("/api/v1/names");
      const sortedData = response.data.data.sort(
        (
          a: { fields: { modified: string | number | Date } },
          b: { fields: { modified: string | number | Date } }
        ) =>
          new Date(b.fields.modified).getTime() -
          new Date(a.fields.modified).getTime()
      );
      setNames(sortedData);
    } catch (err) {
      return new Error(err);
    }
  };

  useEffect(() => {
    getNumberOfNames();
  }, []);

  const dispatch = useAppDispatch();

  const handleSearch = (uniqueName: string) => {
    addPopularName(uniqueName);
    console.log(uniqueName);
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
    popularNames.map((item, index) => {
      return (
        <Link href={`/names/${item.Name}`} passHref key={index}>
          <Sidebar.Anchor onClick={() => handleSearch(item)}>
            <Sidebar.ListItem>{item.Name}</Sidebar.ListItem>
          </Sidebar.Anchor>
        </Link>
      );
    });

  useEffect(() => {
    const getPopularNames = () => {
      fetch("/api/v1/popular")
        .then((response) => response.json())
        .then((data) => setPopularNames(data.data));
    };
    getPopularNames();
  }, []);

  return (
    <Sidebar>
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
            Recent Searches ({searchItems.length == 0 ? 0 : searchItems.length})
          </Sidebar.Heading>
          <Sidebar.List>{userSearches}</Sidebar.List>
        </>
      )}

      {popularNames.length !== 0 && (
        <>
          <Sidebar.Heading>Popular names</Sidebar.Heading>
          <Sidebar.List> {popularSearches}</Sidebar.List>
        </>
      )}

      <NewsletterComp />
    </Sidebar>
  );
};

export default SideBarComp;
