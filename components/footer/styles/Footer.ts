import styled from "styled-components";
import { AnchorProps, DivProps, InputProps, TextProps } from "../../../interfaces/interface";


export const Container = styled.footer`
  background: rgba(243,244,246,1);
  padding: 2.5em 1.5em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  bottom: 0;
  max-width:2000px;

  @media (min-width: 588px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    
    padding: 3em 1.5em;
    flex-direction: row;
  }

  @media (min-width: 1000px) {
  
    padding: 3em 1em 3em 5em;
  }

  @media (min-width: 1100px) {
  
    padding: 3em 3em 3em 5em;
  }

  @media (min-width: 1200px) {
  
    padding: 3em 2em 3em 9em;
  }
`;

export const Row = styled.div<DivProps>`
  padding: 1.5em 0em;
  border-top: ${(props) => (props.full == 'yes' ? "1px solid #c1c1c1" : null)};
  display: ${(props) => (props.close == 'yes' ? "flex" : null)};
  flex-direction:  ${(props) => (props.close == 'yes' ? "column" : null)};

  @media (min-width: 588px) {
    flex: ${(props) => (props.full == 'yes' ? "0 0 100%" : "0 0 42%")};
  }

  @media (min-width: 768px) {
    display: ${(props) => (props.full == 'yes' ? "flex" : null)};
    justify-content: ${(props) => (props.full == 'yes' ? "space-between" : null)};
    align-items: ${(props) => (props.full == 'yes' ? "center" : null)};
    flex: ${(props) => (props.full == 'yes' ? "0 0 100%" : "0 0 33%")};
    padding-right: ${(props) => (props.full == 'yes' ? "6em" : null)};
  }

  @media (min-width: 900px) {

    flex: ${(props) => (props.full == 'yes' ? "0 0 100%" : "0 0 21%")};
  }


`;

export const RowWrap = styled.div`
  display: flex;

  a {
    font-size: 2rem;
    padding: 0.4em 0.4em 0em 0em;
  }
`;

export const ColHead = styled.h5`
  font-size: 0.875rem;
  color: var(--black);
  padding: 0.35em 0em;
`;

export const ColWrap = styled.div<DivProps>`
  @media (min-width: 768px) {
    max-width: ${(props) => (props.full ? "92%" : null)};
  }
`;

export const Logo = styled.div`
  margin-left: 0.6em;
  color: var(--blue-light);
  font-style:italic;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-size: 1rem;
`;

export const Column = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 0.25em 0em;
`;

export const ListLink = styled.a<AnchorProps>`
  font-weight: 400;
  color: var(--black);
  font-size: 0.85rem;
  opacity: 1;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  padding: 0.5em 0em;

  &:hover{
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.2em;
  color: var(--blue-light);
  font-style: italic;
`;

export const Text = styled.p<TextProps>`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--black);
  flex: ${props => props.close == 'yes' && '0 0 60%'}

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.8rem;
  }
`;

export const Input = styled.input<InputProps>`
  border: 1px solid var(--green-dark);
  padding: 1em 1em 1em 1em;
  margin: 0.5em 0em 1.5em 0em;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    margin: 0.5em 1em 1.5em 0em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

export const Button = styled.button`
  border: 1px solid var(--light-gray);
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 4px;
  padding: 0.8em 1.3em;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  cursor: pointer;

  @media(min-width: 750px){
    max-width: 95%;
  }

`;
