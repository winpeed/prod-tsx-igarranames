import React from "react";
import { Container, Heading, List, ListItem, Anchor } from "./styles/Sidebar";
import { ComponentProps } from "../../interfaces/interface";
import { AnchorProps, Ref } from "../../interfaces/interface";

export default function Sidebar({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Heading = function SidebarHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Sidebar.List = function SidebarList({
  children,
  ...restProps
}: ComponentProps) {
  return <List {...restProps}>{children}</List>;
};

Sidebar.ListItem = function SidebarListItem({
  children,
  ...restProps
}: ComponentProps) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Sidebar.Anchor = React.forwardRef<Ref, AnchorProps>(function SidebarAnchor(
  { children, ...restProps },
  ref
) {
  return (
    <Anchor ref={ref} {...restProps}>
      {children}
    </Anchor>
  );
});
