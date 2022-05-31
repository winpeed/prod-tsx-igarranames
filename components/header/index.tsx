import React from "react";
import {
  AnchorProps,
  ComponentProps,
  FormProps,
  InputProps,
  Ref,
} from "../../interfaces/interface";
import {
  Container,
  NavListContent,
  Logo,
  Span,
  ItemWrapper,
  Heading,
  Text,
  FormWrapper,
  Input,
  Form,
  Button,
  Nav,
  NavList,
  NavItem,
  NavLink,
  ResultWrapper,
} from "./styles/Header";

export default function Header({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ children, ...restProps }: ComponentProps) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.NavListContent = function HeaderNavListContent({
  children,
  ...restProps
}: ComponentProps) {
  return <NavListContent {...restProps}>{children}</NavListContent>;
};

Header.Span = function HeaderSpan({ children, ...restProps }: ComponentProps) {
  return <Span {...restProps}>{children}</Span>;
};

Header.ItemWrapper = function HeaderItemWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <ItemWrapper {...restProps}>{children}</ItemWrapper>;
};

Header.Heading = function HeaderHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Header.Text = function HeaderText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Header.FormWrapper = function HeaderFormWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <FormWrapper {...restProps}>{children}</FormWrapper>;
};

Header.Input = function HeaderInput({ children, ...restProps }: InputProps) {
  return <Input {...restProps}>{children}</Input>;
};

Header.Form = function HeaderForm({ children, ...restProps }: FormProps) {
  return <Form {...restProps}>{children}</Form>;
};

Header.Button = function HeaderButton({
  children,
  ...restProps
}: ComponentProps) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: ComponentProps) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.NavList = function HeaderNavList({
  children,
  ...restProps
}: ComponentProps) {
  return <NavList {...restProps}>{children}</NavList>;
};

Header.NavItem = function HeaderNavItem({
  children,
  ...restProps
}: ComponentProps) {
  return <NavItem {...restProps}>{children}</NavItem>;
};

Header.NavLink = React.forwardRef<Ref, AnchorProps>(function HeaderNavLink(
  { children, ...restProps },
  ref
) {
  return (
    <NavLink ref={ref} {...restProps}>
      {children}
    </NavLink>
  );
});

Header.ResultWrapper = function HeaderResultWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <ResultWrapper {...restProps}>{children}</ResultWrapper>;
};
