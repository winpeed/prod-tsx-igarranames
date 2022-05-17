import React, { useState, useEffect } from "react";
import Footer from "./footer";

const NewsletterComp = () => {
  const [newsForm, setNewsForm] = useState({ name: "", email: "" });

  const handleChange = (event: { target: { name: string; value: any } }) => {
    if (event.target.name == "name") {
      setNewsForm((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    } else if (event.target.name == "email") {
      setNewsForm((prevState) => {
        return { ...prevState, email: event.target.value };
      });
    }
  };

  const completeSignUp = async () => {
    const headers = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch("api/v1/newsletter", {
        method: "post",
        headers,
        body: JSON.stringify({ Name: newsForm.name, Email: newsForm.email }),
      });
      const data = await response.json();
      setNewsForm(() => {
        return { name: "", email: "" };
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await completeSignUp();
  };

  useEffect(() => {}, [newsForm.email, newsForm.name]);
  return (
    <Footer.Row full="true">
      <Footer.ColWrap full="true">
        <Footer.ColHead>Subscribe to our newsletter</Footer.ColHead>
        <Footer.Text>
          Stay up to date with the latest news, announcements, and articles.
        </Footer.Text>
      </Footer.ColWrap>

      <Footer.Form onSubmit={handleFormSubmit}>
        <Footer.Input
          type="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          value={newsForm.name}
          name="name"
        />
        <Footer.Input
          type="email"
          placeholder="Enter your email address"
          required
          onChange={handleChange}
          value={newsForm.email}
          name="email"
        />
        <Footer.Button>Subscribe</Footer.Button>
      </Footer.Form>
    </Footer.Row>
  );
};

export default NewsletterComp;
