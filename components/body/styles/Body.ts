import styled from "styled-components";
import {
  AnchorProps,
  HeadingProps,
  SectionProps,
  InputProps,
} from "../../../interfaces/interface";

export const Container = styled.section`
  background: var(--white);
`;

export const NameWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 1em auto;
  justify-content: space-between;
  padding: 2em 1em;

  @media(min-width: 768px){
    flex-direction: row;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-light);
  padding: 1em 2em 2em 2em;
  flex: 0 0 55%;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px var(--gray-light);
  justify-content: space-between;
  line-height: 1.7;
  margin: 1em 0em 3em 0em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em 1em 2em 1em;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1em 1.5em 2em 1.5em;
  }
`;

export const Card = styled.div`
  padding: 2em 0em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: baseline;

  @media (min-width: 768px) {
    flex: 0 0 48%;

    &:nth-child(2) {
      margin-right: 0em;
    }
  }
`;

export const Heading = styled.h2<HeadingProps>`
  color: ${(props: { color: any }) =>
    props.color ? "var(--white)" : "var(--black)"};
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
  line-height: 1.375rem;
  padding: 0.5em 0em 0.5em 0em;
  text-align: ${(props: { alignment: string }) =>
    props.alignment == "left" ? "left" : "center"};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5em 0em;
  }
`;

export const Text = styled.p<HeadingProps>`
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  padding: 0.5em 0em 1em 0em;
  color: ${(props: { color: any }) => (props.color ? "white" : "black")};
  max-width: 400px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Links = styled.a<AnchorProps>`
  display: flex;
  align-items: center;
  color: var(--white);
  background: var(--btn-blue);
  font-size: ${(props: { selected: any }) =>
    props.selected ? "1.15em" : "0.85rem"};
  font-weight: 600;
  letter-spacing: ${(props: { selected: any }) =>
    props.selected ? "0.01em" : "0.015em"};
  padding: 0.9em 2em;
  border-radius: 3px;
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 1em 2em 1em;
  margin: 0em auto;
  text-align: center;
  background: ${(props: { color: any }) =>
    props.color ? "var(--white)" : "var(--black)"};

  @media (min-width: 768px) {
    padding: 2em 4em 4em 4em;
    flex-direction: ${(props: { color: any }) =>
      props.color ? "column" : "row"};
    align-items: center;
  }
`;

export const SectionWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 2em 0em;

  &:nth-child(2) {
    transform: rotate(9deg);
  }
`;

export const Button = styled.button`
  border: 1px solid var(--light-gray);
  font-weight: 600;
  border-radius: 4px;
  padding: 0.8em 1.3em;
  background: var(--yellow);
  color: var(--black);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.3em;
`;

export const LetterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    padding: 0.7em 1.1em;
    border: 1px solid var(--gray-dark);
    width: 60px;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  text-align: left;
  max-width: 390px;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  padding: 0.7em 1em;
  border: 1px solid var(--gray-dark);
  display: block;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: 1px solid var(--gray-dark);
  display: block;
  width: 100%;
  min-height: 150px;
  padding: 0.7em 1em;
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  padding: 2em 0em 0.5em 0em;
  display: block;
`;
