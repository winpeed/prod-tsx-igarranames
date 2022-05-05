import styled from "styled-components";
import { AnchorProps, DivProps, InputProps } from "../../../interfaces/interface";


export const Container = styled.footer`
  background: var(--white);
  padding: 2.5em 1em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  bottom: 0;
  max-width:1100px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto;
    padding: 3em;
  }
`;

export const Row = styled.div<DivProps>`
  padding: 1.5em 0em;
  border-top: ${(props) => (props.full == 'yes' ? "1px solid #c1c1c1" : null)};

  @media (min-width: 768px) {
    display: ${(props) => (props.full == 'yes' ? "flex" : null)};
    justify-content: ${(props) => (props.full == 'yes' ? "space-between" : null)};
    align-items: ${(props) => (props.full == 'yes' ? "center" : null)};
    flex: ${(props) => (props.full == 'yes' ? "0 0 100%" : "0 0 33%")};
    padding-right: ${(props) => (props.full == 'yes' ? "6em" : null)};
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
    max-width: ${(props) => (props.full ? "70%" : null)};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0em 0em 0.8em 0em;
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
  font-size: 1rem;
  opacity: 1;
  line-height: 1.5;
  font-weight: 500;
`;

export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.2em;
  color: var(--blue-light);
  font-style: italic;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.8rem;
  }
`;

export const Input = styled.input<InputProps>`
  border: 1px solid var(--green-dark);
  padding: 1em 3em 1em 1em;
  margin: 1em 0em;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    margin: 1em 1em 1em 0em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
`;
