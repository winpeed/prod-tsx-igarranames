import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import axios from "axios";

const SideBar = () => {
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
      console.log(sortedData);
      setNames(sortedData);
    } catch (err) {
      return new Error(err);
    }
  };

  useEffect(() => {
    getNumberOfNames();
  }, []);

  return (
    <aside
      style={{
        flex: "0 0 35%",
        border: "1px solid var(--gray-dark)",
        padding: "1.5em 1em",
      }}
    >
      <h3>Popular names</h3>
      <h3>
        Recent Searches ({searchItems.length == 0 ? 0 : searchItems.length})
      </h3>

      {
        <ul
          style={{
            lineHeight: "1.6",
            columnWidth: "125px",
            padding: "0em",
            margin: "0em",
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            textAlign: "left",
          }}
        >
          {searchItems.length !== 0 &&
            searchItems.map((item, index) => {
              return (
                <Link href={`/names/${item}`} passHref key={index}>
                  <a>
                    <li
                      style={{
                        padding: "0.25em 0em",
                        fontWeight: "500",
                        width: "150px",
                        fontSize: "1.1rem",
                        letterSpacing: "0.02em",
                        color: "#007fb1",
                      }}
                    >
                      {item}
                    </li>
                  </a>
                </Link>
              );
            })}
        </ul>
      }

      <h3>Recently Added ({names.length == 0 ? 0 : 10})</h3>

      {
        <ul
          style={{
            lineHeight: "1.6",
            columnWidth: "125px",
            padding: "0em",
            margin: "0em",
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            textAlign: "left",
          }}
        >
          {names.length !== 0 &&
            names.slice(0, 10).map((item) => {
              const {
                id,
                fields: { name },
              } = item;
              return (
                <Link href={`/names/${name}`} passHref key={id}>
                  <a>
                    <li
                      style={{
                        padding: "0.25em 0em",
                        fontWeight: "500",
                        width: "150px",
                        fontSize: "1.1rem",
                        letterSpacing: "0.02em",
                        color: "#007fb1",
                      }}
                    >
                      {name}
                    </li>
                  </a>
                </Link>
              );
            })}
        </ul>
      }
    </aside>
  );
};

export default SideBar;
