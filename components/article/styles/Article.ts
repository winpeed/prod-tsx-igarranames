import styled from "styled-components";
import { ButtonProps, DivProps } from "../../../interfaces/interface";

export const Container = styled.section`
  display: flex;
  align-items: center;
  border:1px solid var(--green-dark);
  padding: 1em 1.5em 1em 1.5em;
  flex: 0 0 52%;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px var(--gray-light);
  justify-content: space-between;
  line-height: 1.7;
  margin: 1em 0em 3em 0em;
  width: 100%;


`;

export const Heading = styled.h3`
font-size: 2.6rem;
`

export const Wrapper = styled.div<DivProps>`
padding: 0.1em 0em;
font-size:${props => props.icon  ? '4rem' : null};
cursor:${props => props.icon ? 'pointer' : null}
`

export const MinHeading = styled.h4`
color: #007fb1;
text-transform: uppercase;
font-size: 0.85rem;
padding: 0.4em 0em; 
`

export const Text = styled.p`
padding: 0.15em 0em;
`

export const Span = styled.span`
font-style: italic;
font-size: 0.9rem;
margin-top: 1em;
display: block;
`

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