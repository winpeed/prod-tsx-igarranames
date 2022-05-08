import {
  ButtonProps,
  ComponentProps,
  DivProps,
} from "../../interfaces/interface";
import {
  Container,
  Heading,
  Wrapper,
  MinHeading,
  Text,
  Span,
  Button,
} from "./styles/Article";

export default function Article({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Article.Heading = function ArticleHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Article.Wrapper = function ArticleWrapper({
  children,
  ...restProps
}: DivProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Article.MinHeading = function ArticleMinHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <MinHeading {...restProps}>{children}</MinHeading>;
};

Article.Text = function ArticleText({
  children,
  ...restProps
}: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

Article.Span = function ArticleSpan({
  children,
  ...restProps
}: ComponentProps) {
  return <Span {...restProps}>{children}</Span>;
};

Article.Button = function ArticleButton({
  children,
  ...restProps
}: ButtonProps) {
  return <Button {...restProps}>{children}</Button>;
};
