import React from "react";
import Link from "next/link";

type Props = {};

const SearchResults = ({ data, letter, searchText }) => {
  const filteredResult = data.filter((item) => {
    if (searchText === "") {
      return item;
    } else if (
      item.fields.engName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <main
      style={{
        padding: "3em 1em 3em 1em",
      }}
    >
      <section
        style={{
          maxWidth: "870px",
          margin: "0 auto",
        }}
      >
        {data.length == 0 && searchText == "" ? (
          <h3
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "500",
              padding: "0.2em 0em 0.8em 0em",
            }}
          >
            No names starting with{" "}
            <span style={{ color: "#1938b3" }}>'{letter}'</span>
          </h3>
        ) : searchText == "" ? (
          <>
            <h3
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "500",
                padding: "0.2em 0em 0.8em 0em",
              }}
            >
              All names starting with{" "}
              <span style={{ color: "#1938b3" }}>'{letter}'</span>
            </h3>
            <div style={{ padding: "1em" }}>
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "1.6",
                  columnWidth: "125px",
                  padding: "0em",
                  margin: "0em",
                }}
              >
                {filteredResult.map((item) => {
                  const { id, fields } = item;
                  return (
                    <Link href={`/names/${fields.name}`} passHref key={id}>
                      <a>
                        <li
                          style={{
                            padding: "0.25em 0em",
                            fontWeight: "500",
                            width: "150px",
                            fontSize: "1.1rem",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {fields.name}
                        </li>
                      </a>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </>
        ) : filteredResult.length == 0 ? (
          <>
            <h3
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "500",
                padding: "0.2em 0em 0.8em 0em",
              }}
            >
              No results found
            </h3>
          </>
        ) : null}
        <div>
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
            {searchText !== "" &&
              filteredResult.map((item) => {
                const { id, fields } = item;
                return (
                  <Link href={`/names/${fields.name}`} passHref key={id}>
                    <a>
                      <li
                        style={{
                          padding: "0.25em 0em",
                          fontWeight: "500",
                          width: "150px",
                          fontSize: "1.1rem",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {fields.name}
                      </li>
                    </a>
                  </Link>
                );
              })}
          </ul>
        </div>
      </section>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            background: "var(--blue-light)",
            cursor: "pointer",
            padding: "1em 2em",
            borderRadius: "4px",
            border: "none",
            color: "var(--white)",
            fontSize: "1rem",
            fontWeight: "600",
            margin: "1.5em 0em",
          }}
        >
          Add Name(s)
        </button>
      </div>
    </main>
  );
};

export default SearchResults;
