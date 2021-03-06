import styled from "styled-components";
import {
  AnchorProps,
  FormProps,
  InputProps,
} from "../../../interfaces/interface";

export const Container = styled.header`
  background: linear-gradient(35deg, var(--gray-light), var(--gray-light));
  background-size: contain;
  padding: 5.5em 1em 0em 1em;
  background-blend-mode: soft-light;

  @media (min-width: 900px) {
    padding: 6em 1em 0em 1em;
  }
`;

export const NavListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.7em;
  font-style: italic;
  letter-spacing: 0.02em;
  font-weight: 600;
`;

export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.5em;
  cursor: pointer;
  z-index: 1;
  color: var(--blue-light);
  font-style: italic;
  z-index: 3;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;
  max-width: 2000px;
  margin: 0 auto;
  background: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;

  @media (min-width: 1000px) {
    padding: 0em 4em;
  }

  @media (min-width: 1200px) {
    padding: 0em 8em;
  }
`;

export const ItemWrapper = styled.div`
  padding: 1em 0em 0em 0em;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const Heading = styled.h1`
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: 1.9rem;
  line-height: 1.3;
  padding: 0.5em 0em;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: var(--black);
  padding-bottom: 0.4em;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.8;
  }
`;

export const FormWrapper = styled.div`
  background: var(--white);
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0em;
  border-radius: 4px;
  border: 1px solid var(--green-dark);
  padding: 0.8em 0.3em 0.8em 1.3em;
  align-items: center;
`;

export const Input = styled.input<InputProps>`
  width: 83%;
  padding-left: 1.1em;
  font-size: 1.2rem;
  border: 1px solid var(--white);

  &:focus {
    outline: none;
  }

  @media (min-width: 368px) {
    width: 87%;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  margin: 0 auto;
  padding: 0.5em 0em 1.5em 0em;
`;

export const Button = styled.button`
  border: 1px solid var(--light-gray);
  font-weight: 600;
  border-radius: 4px;
  padding: 0.6em 0.9em;
  background: var(--yellow);
  color: var(--black);
  font-size: 1rem;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 2;
  flex: 0 0 73%;
  justify-content: space-between;

  @media (max-width: 900px) {
    background: var(--black);
    color: var(--white);
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8.5em 0em 11.5em 0em;
    margin: 0em;
    left: 0;
    right: 0;
    top: 79px;
    position: absolute;
    transform: translateX(0%);
    border: 1px solid var(--black);
  }
`;

export const NavItem = styled.li`
  padding: 1em 0em;
  cursor: pointer;

  @media (min-width: 900px) {
    padding: 0em 0.8em;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const NavLink = styled.a<AnchorProps>`
  color: ${(props) =>
    props.color == "true"
      ? "var(--black)"
      : props.name == "login" || props.name == "donate"
      ? "var(--white)"
      : "var(--white)"};
  font-size: 0.95rem;
  padding: 0.6em 1em;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 5px;
  background: ${(props) =>
    props.name == "login"
      ? "var(--red)"
      : props.name == "donate"
      ? "var(--green)"
      : null};
  align-items: center;
  display: flex;
  z-index: 10;
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: ${(props) =>
      props.name == "donate" || props.name == "login"
        ? "var(--white)"
        : "var(--blue-light)"};
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  align-items: flex-start;
  padding: 0.5em 2em 0.8em 2em;
  max-width: 580px;
  margin: 1.2em auto -2em;
  z-index: 3;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  cursor: default;
`;
