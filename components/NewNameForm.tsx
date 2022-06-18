import React, { useState } from "react";
import Body from "./body";
import Image from "next/image";

export default function NewNameForm() {
  const [formDetails, setFormDetails] = useState<{
    name: string;
    meaning: string;
    email: string;
    isIgarra: string;
  }>({
    name: "",
    meaning: "",
    email: "",
    isIgarra: "",
  });
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addNewName = async () => {
    const headers = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch("api/v1/newname", {
        method: "post",
        headers,
        body: JSON.stringify({
          name: formDetails.name,
          meaning: formDetails.meaning,
          email: formDetails.email,
          isIgarra: formDetails.isIgarra,
        }),
      });
      const data = await response.json();
      setFormDetails({ name: "", meaning: "", email: "", isIgarra: "" });
      setIsShow(!isShow);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await addNewName();
  };

  return (
    <Body.Section color="true">
      {isShow ? (
        <Body.Form onSubmit={handleFormSubmit}>
          <Body.ContactHeading alignment="left">
            Add New Name{" "}
          </Body.ContactHeading>
          <Body.Label>New Igarra Name</Body.Label>
          <Body.Input
            type="text"
            placeholder="Enter new Igarra Name"
            value={formDetails.name}
            onChange={handleChange}
            name="name"
            required
          />
          <Body.Label>Meaning of Name</Body.Label>
          <Body.TextArea
            value={formDetails.meaning}
            onChange={handleChange}
            name="meaning"
            required
          ></Body.TextArea>
          <Body.Label>Your Email Address</Body.Label>
          <Body.Input
            type="email"
            placeholder="Enter your email address"
            value={formDetails.email}
            onChange={handleChange}
            name="email"
            required
          />
          <Body.Label>Are you from Igarra (Etuno)?</Body.Label>
          <Body.Select onChange={handleChange} name="isIgarra">
            <Body.Option value="Yes">Yes</Body.Option>
            <Body.Option value="No">No</Body.Option>
          </Body.Select>
          <Body.Button media="green">Submit</Body.Button>
        </Body.Form>
      ) : (
        <Body.Wrapper close="yes">
          <Body.Text>Thank you for your contribution to Igarranames.</Body.Text>{" "}
          <Image
            src="/close.svg"
            alt="Close"
            width={30}
            height={30}
            onClick={() => {
              setIsShow(!isShow);
            }}
            style={{ cursor: "pointer" }}
          />
        </Body.Wrapper>
      )}
    </Body.Section>
  );
}
