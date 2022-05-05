import React from "react";
import Body from "./body";
import { ComponentProps } from "../interfaces/interface";

export default function NewNameForm(props: ComponentProps) {
  return (
    <Body.Section color="true">
      <Body.Form>
        <Body.Heading alignment="left">Add New Name </Body.Heading>
        <Body.Label>New Igarra Name</Body.Label>
        <Body.Input type="text" placeholder="Enter new Igarra Name" />
        <Body.Label>Meaning of Name</Body.Label>
        <Body.TextArea></Body.TextArea>
        <Body.Label>Your Email Address</Body.Label>
        <Body.Input type="email" placeholder="Enter your email address" />
        <Body.Button>Submit</Body.Button>
      </Body.Form>
    </Body.Section>
  );
}
