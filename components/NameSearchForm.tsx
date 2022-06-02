import React from "react";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import { Result } from "../interfaces/interface";

interface FormContainerProps {
  searchText?: string | null;
  names?: Result[];
  onSetSearch?: () => void;
  onSetText?: ({ target }: { target: HTMLInputElement }) => Function;
}

export default function NameSearchForm({
  searchText,
  onSetText,
}: FormContainerProps) {
  return (
    <>
      <Header.ItemWrapper>
        <Header.Form
          onSubmit={(event: { preventDefault: () => void }) => {
            event.preventDefault();
          }}
        >
          <Header.FormWrapper>
            <BsSearch style={{ margin: "0em 0.4em -0.2em 0em" }} />
            <Header.Input
              type="text"
              placeholder="Search..."
              onChange={onSetText}
              value={searchText}
            />
          </Header.FormWrapper>
        </Header.Form>
      </Header.ItemWrapper>
    </>
  );
}
