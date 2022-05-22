import styled from "styled-components";
import {
  AnchorProps,
  HeadingProps,
  SectionProps,
  InputProps,
  ButtonProps,
  DivProps,
  TextAreaProps,
  SelectProps,
  OptionProps
} from "../../../interfaces/interface";

export const Container = styled.section`
  background: var(--white);
`;

export const NameWrapper = styled(Container)<SectionProps>`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  margin: 0em auto;
  justify-content: space-between;
  padding: ${(props) => (props.hero == "set" ? "0em 0.7em" : "0.7em")};
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
  padding: ${(props) => (props.hero == "set" ? "0em 0.7em 1em 3.7em" : "0.7em")};

   
  }
`;

export const Article = styled.article<SectionProps>`
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
  flex-direction: ${(props) =>
    props.direction == "column" ? "column" : "row"};
`;

export const BannerWrapper = styled.div<DivProps>`
  position: fixed;
  background: ${(props) =>
    props.color == "black" ? "var(--black)" : "var(--green-dark)"};
  color: var(--white);
  z-index: 11;
  margin: 0 auto;
  top: 15%;
  left: 5%;
  right: 5%;
  text-align: center;
  max-width: 600px;
  height: fit-content;
  padding: 2em 0.5em;

  @media(max-width: 376px){
    bottom: 2%;
  }

  @media(min-width: 450px){
    bottom: 20%;
  }

  @media(min-width: 760px){
    bottom: 9%;
  }
`;

export const Banner = styled.section<SectionProps>`
  display: flex;
  max-width: 700px;
  align-items: center;
  padding: 1em 2em 1em 2em;
  justify-content: space-between;
  line-height: 1.7;
  flex-direction: ${(props) =>
    props.direction == "column" ? "column" : "row"};
`;

export const Wrapper = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em 1em 2em 1em;

  @media (min-width: 768px) {
    flex-direction:  ${(props) => (props.close == 'yes' ? "column" : "row")};
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


export const ContactHeading = styled.h1<HeadingProps>`
font-weight: 600;
  letter-spacing: 0.015em;
  font-size: 2.5rem;
  line-height: 1.2;
  padding: 0.5em 0em 0.5em 0em;
  text-align: center;
  text-align: ${(props) => (props.alignment == "left" ? "left" : "center")};

`

export const Heading = styled.h2<HeadingProps>`
  color: ${(props) =>
    props.color == "white" ? "var(--yellow)" : "var(--black)"};
  font-weight: 600;
  letter-spacing: 0.015em;
  font-size: 1.5rem;
  line-height: 1.2;
  padding: 0.5em 0em 0.5em 0em;
  text-align: ${(props) => (props.alignment == "left" ? "left" : "center")};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Text = styled.p<HeadingProps>`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0.5em 0em 1em 0em;
  color: ${(props) =>
    props.color == "white" ? "var(--white)" : "var(--black)"};
  max-width: 400px;
    margin: 0 auto;
`;

export const Links = styled.a<AnchorProps>`
  display: flex;
  align-items: center;
  color: var(--white);
  background: var(--btn-blue);
  font-size: ${props =>  props.selected ? "1.15em" : "0.85rem"};
  font-weight: 600;
  letter-spacing: ${props =>  props.selected ? "0.01em" : "0.015em"};
  padding: 0.9em 2em;
  border-radius: 3px;
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0em 1em 3em 1em;
  margin: 0em auto;
  text-align: center;
  background: ${(props) => (props.color ? "var(--white)" : "var(--black)")};

  @media (min-width: 768px) {
    padding: 0em 3em 4em 1em;
    flex-direction: ${(props) => (props.color ? "column" : "row")};
    align-items: center;
    flex:0 0 43%;
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

export const Button = styled.button<ButtonProps>`
  border: 1px solid var(--light-gray);
  font-weight: 600;
  border-radius: 4px;
  padding: 0.8em 1.3em;
  background: ${(props) =>
    props.media == "cancel"
      ? "var(--red)"
      : props.media == "submit"
      ? "var(--yellow)"
      : props.media == "green" ? "var(--green)" : null};
  color: ${(props) =>
    props.media == "submit" ? "var(--black)" : "var(--white)"};
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 1.3em;
  dispay: inline-block;

  &:nth-child(2) {
    margin-left: 1.5em;
  }
`;

export const LetterWrapper = styled.section<SectionProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: ${(props) =>
      props.justify == "center" ? "center" : " flex-start"};
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
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column; 
`;

export const Input = styled.input<InputProps>`
  padding: 0.9em 1em;
  border: 1px solid var(--black);
  border-radius: 3px;
  display: block;
  margin: 0.8em 0em;
  width: 100%;
`;

export const TextArea = styled.textarea<TextAreaProps>`
  border: 1px solid var(--black);
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

export const Select = styled.select<SelectProps>`
padding: 0.8em;
margin: 0.8em 0em;
`

export const Option = styled.option<OptionProps>`
`

export const ContactWrapper = styled.section
`
padding: 7.5em 1em;

@media(min-width: 500px){
  margin: 0 auto;
  max-width: 450px;
  text-align: center;
}

`