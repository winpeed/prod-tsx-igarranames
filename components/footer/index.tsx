import React from "react";
import { AnchorProps, DivProps, InputProps } from "../../interfaces/interface";
import { ComponentProps, Ref } from "../../interfaces/interface";
import {
  Container,
  Row,
  RowWrap,
  Logo,
  Column,
  ListItem,
  ListLink,
  ColHead,
  ColWrap,
  Span,
  Text,
  Form,
  Button,
  Input,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Logo = function FooterLogo({ children, ...restProps }: ComponentProps) {
  return <Logo {...restProps}>{children}</Logo>;
};

Footer.Row = function FooterRow({ children, ...restProps }: DivProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({
  children,
  ...restProps
}: ComponentProps) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.ListItem = function FooterListItem({
  children,
  ...restProps
}: ComponentProps) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Footer.ColHead = function FooterColHead({
  children,
  ...restProps
}: ComponentProps) {
  return <ColHead {...restProps}>{children}</ColHead>;
};

Footer.ColWrap = function FooterColWrap({ children, ...restProps }: DivProps) {
  return <ColWrap {...restProps}>{children}</ColWrap>;
};

Footer.Span = function FooterSpan({ children, ...restProps }: ComponentProps) {
  return <Span {...restProps}>{children}</Span>;
};

Footer.RowWrap = function FooterRowWrap({
  children,
  ...restProps
}: ComponentProps) {
  return <RowWrap {...restProps}>{children}</RowWrap>;
};

Footer.Text = function FooterText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Form = function FooterForm({ children, ...restProps }: ComponentProps) {
  return <Form {...restProps}>{children}</Form>;
};

Footer.Input = function FooterInput({ ...restProps }: InputProps) {
  return <Input {...restProps} />;
};

Footer.Button = function FooterButton({
  children,
  ...restProps
}: ComponentProps) {
  return <Button {...restProps}>{children}</Button>;
};

Footer.ListLink = React.forwardRef<Ref, AnchorProps>(function FooterListLink(
  { children, ...restProps },
  ref
) {
  return (
    <ListLink ref={ref} {...restProps}>
      {children}
    </ListLink>
  );
});
