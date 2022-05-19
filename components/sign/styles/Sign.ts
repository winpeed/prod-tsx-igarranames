import styled from "styled-components";
import {
  InputProps,
  HeadingProps,
  ButtonProps,
  DivProps,
  AnchorProps,
  FormProps
} from "../../../interfaces/interface";

export const Container = styled.main`
  background: var(--gray-dark);
  width: 100vw;
  min-height: 100vh;
  padding: 5em 1.8em 3em 1em;
`;

export const Card = styled.section`
  max-width: 480px;
  margin: 2em auto;
  background: var(--white);
  text-align: center;
  padding: 0em 1.5em 3em 1.5em;
  border-radius: 8px;

  @media (max-width: 400px) {
    max-width: 350px;
  }
`;

export const Wrapper = styled.div<DivProps>`
  padding: 0.1em 0em;
  display: flex;
  max-width: ${props => props.width == 'small' ? '500px' : '300px'};
  margin: 0 auto;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: ${props => props.direction == 'column' ? 'column' : 'row'}
`;

export const Heading = styled.h2<HeadingProps>`
  color: var(--black);
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
  line-height: 1.375rem;
  padding: 0.5em 0em 0.5em 0em;
  margin-left: 0.8em;
  text-align: ${(props) => (props.alignment == "left" ? "left" : "center")};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 1em 0em;
  }
`;

export const MinHeading = styled.h4`
  color: var(--blue-light);
  font-size: 1.5rem;
  margin-top: 1em;
  padding: 0.4em 0em;
  margin-top: 1em;
  text-align: center;
`;

export const Text = styled.p<HeadingProps>`
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 600;
  padding: 0.5em 0em 0.5em 0em;
  color: ${(props) => (props.color == 'red' ? 'var(--red)' : props.color == 'white' ? "white" : "black")};
  text-align: center;
  margin-top: 1em;


  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Form = styled.form<FormProps>`
  text-align: left;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 1em 0.8em;

`;

export const Input = styled.input<InputProps>`
  padding: 1em 1em;
  border: none;
  display: block;
  border-radius: 4px;
  width: 100%;
  background: var(--gray-dark);
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  padding: 1.5em 0em 0.8em 0em;
  display: block;
`;

export const Button = styled.button<ButtonProps>`
  border: 1px solid var(--light-gray);
  letter-spacing: 0.03em;
  font-weight: 600;
  border-radius: 4px;
  padding: 1em 1.3em;
  color: var(--white);
  background: ${(props) =>
    props.media == "google"
      ? "var(--red)"
      : props.media == "facebook"
      ? "var(--blue-light)" 
      : props.media == "twitter" ? "var(--btn-blue)" :"var(--green)"};
  font-size: 0.85rem;
  cursor: pointer;
  display: block;
  width: 100%;
  margin: 1.5em auto 1em auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1;
  color: var(--black);
  font-style: italic;
  max-width: 300px;
  display: block;
  margin: 1em auto;
  line-height: 1.5;
`;

export const Anchor = styled.a<AnchorProps>`

margin-top: 1em;
display: block;
font-size: 0.85rem;

  :hover{
    text-decoration: none;
    color: var(--black)
  }
`;