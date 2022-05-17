import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import axios from "axios";
import { add } from "../src/features/search/searchSlice";
import Sidebar from "../components/sidebar/index";
import NewsletterComp from "./NewsletterComp";

const SideBarComp = () => {
  const [searchItems, setSearchItems] = useState([]);

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
        (a, b) =>
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
    dispatch(add(uniqueName));
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

      {searchItems.length !== 0 && (
        <Sidebar.Heading>Popular names</Sidebar.Heading>
      )}

      <NewsletterComp />
    </Sidebar>
  );
};

export default SideBarComp;
