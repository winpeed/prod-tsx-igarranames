import React, { useState } from "react";
import Body from "./body";

function ContactForm() {
  const [formDetails, setFormDetails] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendMessage = async () => {
    const headers = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch("api/v1/contactform", {
        method: "post",
        headers,
        body: JSON.stringify({
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          message: formDetails.message,
        }),
      });
      const data = await response.json();
      console.log(data);
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await sendMessage();
  };
  return (
    <>
      <Body.ContactWrapper>
        <Body.ContactHeading>Leave A Message</Body.ContactHeading>
        <Body.Text>
          Do you have suggestions, comments , feedback that can make this site
          much better? Please do well to leave a message.
        </Body.Text>

        <Body.Form onSubmit={handleFormSubmit}>
          <Body.Label>First Name *</Body.Label>
          <Body.Input
            type="text"
            name="firstName"
            value={formDetails.firstName}
            onChange={handleChange}
            required
          />
          <Body.Label>Last Name (Surname)</Body.Label>
          <Body.Input
            type="text"
            name="lastName"
            value={formDetails.lastName}
            onChange={handleChange}
          />
          <Body.Label>Email Address *</Body.Label>
          <Body.Input
            type="email"
            name="email"
            value={formDetails.email}
            onChange={handleChange}
            required
          />
          <Body.Label>Message *</Body.Label>
          <Body.TextArea
            name="message"
            value={formDetails.message}
            onChange={handleChange}
            required
          ></Body.TextArea>
          <Body.Button media="green">Send</Body.Button>
        </Body.Form>
      </Body.ContactWrapper>
    </>
  );
}

export default ContactForm;
