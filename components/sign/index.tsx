import {
  Container,
  Card,
  Form,
  Input,
  Label,
  Heading,
  MinHeading,
  Button,
  Text,
  Span,
  Wrapper,
  Anchor,
} from "./styles/Sign";
import { ComponentProps, Ref, AnchorProps } from "../../interfaces/interface";
import React from "react";

export default function Sign({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Sign.Card = function SignCard({ children, ...restProps }: ComponentProps) {
  return <Card {...restProps}>{children}</Card>;
};

Sign.Wrapper = function SignWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sign.Text = function SignText({ children, ...restProps }: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Sign.Form = function SignForm({ children, ...restProps }: ComponentProps) {
  return <Form {...restProps}>{children}</Form>;
};

Sign.Input = function SignInput({ ...restProps }: ComponentProps) {
  return <Input {...restProps} />;
};

Sign.Label = function SignLabel({ children, ...restProps }: ComponentProps) {
  return <Label {...restProps}>{children}</Label>;
};

Sign.Button = function SignButton({ children, ...restProps }: ComponentProps) {
  return <Button {...restProps}>{children}</Button>;
};

Sign.Heading = function SignHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Sign.MinHeading = function SignMinHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <MinHeading {...restProps}>{children}</MinHeading>;
};

Sign.Span = function SignSpan({ children, ...restProps }: ComponentProps) {
  return <Span {...restProps}>{children}</Span>;
};

Sign.Anchor = React.forwardRef<Ref, AnchorProps>(function HeaderAnchor(
  { children, ...restProps },
  ref
) {
  return (
    <Anchor ref={ref} {...restProps}>
      {children}
    </Anchor>
  );
});
