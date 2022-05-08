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
import {
  ComponentProps,
  Ref,
  AnchorProps,
  InputProps,
  ButtonProps,
  HeadingProps,
  DivProps,
} from "../../interfaces/interface";
import React from "react";

export default function Sign({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Sign.Card = function SignCard({ children, ...restProps }: ComponentProps) {
  return <Card {...restProps}>{children}</Card>;
};

Sign.Wrapper = function SignWrapper({ children, ...restProps }: DivProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sign.Text = function SignText({ children, ...restProps }: HeadingProps) {
  return <Text {...restProps}>{children}</Text>;
};

Sign.Form = function SignForm({ children, ...restProps }: ComponentProps) {
  return <Form {...restProps}>{children}</Form>;
};

Sign.Input = function SignInput({ ...restProps }: InputProps) {
  return <Input {...restProps} />;
};

Sign.Label = function SignLabel({ children, ...restProps }: ComponentProps) {
  return <Label {...restProps}>{children}</Label>;
};

Sign.Button = function SignButton({ children, ...restProps }: ButtonProps) {
  return <Button {...restProps}>{children}</Button>;
};

Sign.Heading = function SignHeading({ children, ...restProps }: HeadingProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Sign.MinHeading = function SignMinHeading({
  children,
  ...restProps
}: HeadingProps) {
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
