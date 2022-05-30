import React from "react";
import {
  AnchorProps,
  ButtonProps,
  DivProps,
  FormProps,
  HeadingProps,
  InputProps,
  OptionProps,
  SectionProps,
  SelectProps,
  TextAreaProps,
} from "../../interfaces/interface";
import { ComponentProps, Ref } from "../../interfaces/interface";
import {
  Container,
  NameWrapper,
  Article,
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
  BannerWrapper,
  ContactHeading,
  ContactWrapper,
  Banner,
  Input,
  TextArea,
  Label,
  Select,
  Option,
  UnorderedList,
  ListItem,
  PrivacyWrapper,
  PrivacyText,
} from "./styles/Body";

export default function Body({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Body.NameWrapper = function BodyNameWrapper({
  children,
  ...restProps
}: SectionProps) {
  return <NameWrapper {...restProps}>{children}</NameWrapper>;
};

Body.BannerWrapper = function BodyBannerWrapper({
  children,
  ...restProps
}: DivProps) {
  return <BannerWrapper {...restProps}>{children}</BannerWrapper>;
};

Body.Banner = function BodyBanner({ children, ...restProps }: SectionProps) {
  return <Banner {...restProps}>{children}</Banner>;
};

Body.Article = function BodyArticle({
  children,
  ...restProps
}: ComponentProps) {
  return <Article {...restProps}>{children}</Article>;
};

Body.Wrapper = function BodyWrapper({ children, ...restProps }: DivProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Body.Card = function BodyCard({ children, ...restProps }: ComponentProps) {
  return <Card {...restProps}>{children}</Card>;
};

Body.Text = function BodyText({ children, ...restProps }: HeadingProps) {
  return <Text {...restProps}>{children}</Text>;
};

Body.Heading = function BodyHeading({ children, ...restProps }: HeadingProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Body.ContactHeading = function BodyContactHeading({
  children,
  ...restProps
}: HeadingProps) {
  return <ContactHeading {...restProps}>{children}</ContactHeading>;
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

Body.Button = function BodyButton({ children, ...restProps }: ButtonProps) {
  return <Button {...restProps}>{children}</Button>;
};

Body.SectionWrap = function BodySectionWrap({
  children,
  ...restProps
}: SectionProps) {
  return <SectionWrap {...restProps}>{children}</SectionWrap>;
};

Body.LetterWrapper = function BodyLetterWrapper({
  children,
  ...restProps
}: SectionProps) {
  return <LetterWrapper {...restProps}>{children}</LetterWrapper>;
};

Body.Form = function BodyForm({ children, ...restProps }: FormProps) {
  return <Form {...restProps}>{children}</Form>;
};

Body.TextArea = function BodyTextArea({
  children,
  ...restProps
}: TextAreaProps) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

Body.Label = function BodyLabel({ children, ...restProps }: ComponentProps) {
  return <Label {...restProps}>{children}</Label>;
};

Body.Input = function BodyInput({ ...restProps }: InputProps) {
  return <Input {...restProps} />;
};

Body.Select = function BodySelect({ children, ...restProps }: SelectProps) {
  return <Select {...restProps}>{children}</Select>;
};

Body.Option = function BodyOption({ children, ...restProps }: OptionProps) {
  return <Option {...restProps}>{children}</Option>;
};

Body.ContactWrapper = function BodyContactWrapper({
  children,
  ...restProps
}: SectionProps) {
  return <ContactWrapper {...restProps}>{children}</ContactWrapper>;
};

Body.PrivacyWrapper = function BodyPrivacyWrapper({
  children,
  ...restProps
}: SectionProps) {
  return <PrivacyWrapper {...restProps}>{children}</PrivacyWrapper>;
};

Body.PrivacyText = function BodyPrivacyText({
  children,
  ...restProps
}: SectionProps) {
  return <PrivacyText {...restProps}>{children}</PrivacyText>;
};

Body.UnorderedList = function BodyUnorderedList({
  children,
  ...restProps
}: ComponentProps) {
  return <UnorderedList {...restProps}>{children}</UnorderedList>;
};

Body.ListItem = function BodyListItem({
  children,
  ...restProps
}: ComponentProps) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
