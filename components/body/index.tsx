import React from "react";
import { AnchorProps, SectionProps } from "../../interfaces/interface";
import { ComponentProps, Ref } from "../../interfaces/interface";
import {
  Container,
  Wrapper,
  Links,
  Heading,
  Text,
  Card,
  Section,
  SectionWrap,
  Button,
  LetterWrapper,
  Form,
  Input,
  TextArea,
  Label,
} from "./styles/Body";

export default function Body({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Body.Wrapper = function BodyWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Body.Card = function BodyCard({ children, ...restProps }: ComponentProps) {
  return <Card {...restProps}>{children}</Card>;
};

Body.Text = function BodyText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Body.Heading = function BodyHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Body.Links = React.forwardRef<Ref, AnchorProps>(function BodyLinks(
  { children, ...restProps },
  ref
) {
  return (
    <Links ref={ref} {...restProps}>
      {children}
    </Links>
  );
});

Body.Section = function BodySection({ children, ...restProps }: SectionProps) {
  return <Section {...restProps}>{children}</Section>;
};

Body.Button = function BodyButton({ children, ...restProps }: ComponentProps) {
  return <Button {...restProps}>{children}</Button>;
};

Body.SectionWrap = function BodySectionWrap({
  children,
  ...restProps
}: ComponentProps) {
  return <SectionWrap {...restProps}>{children}</SectionWrap>;
};

Body.LetterWrapper = function BodyLetterWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <LetterWrapper {...restProps}>{children}</LetterWrapper>;
};

Body.Form = function BodyForm({ children, ...restProps }: ComponentProps) {
  return <Form {...restProps}>{children}</Form>;
};

Body.TextArea = function BodyTextArea({
  children,
  ...restProps
}: ComponentProps) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

Body.Label = function BodyLabel({ children, ...restProps }: ComponentProps) {
  return <Label {...restProps}>{children}</Label>;
};

Body.Input = function BodyInput({ ...restProps }: ComponentProps) {
  return <Input {...restProps} />;
};
