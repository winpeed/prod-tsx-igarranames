import styled from "styled-components";
import { AnchorProps, FormProps, InputProps } from "../../../interfaces/interface";

export const Container = styled.header`
background: linear-gradient(35deg, var(--gray-light), var(--gray-light));
background-size: contain;
  padding: 5em 1em 2em 1em;
  background-blend-mode: soft-light;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.7em;
  font-style:italic;
  letter-spacing: 0.02em;
  font-weight: 600;
`;

export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.5em;
  cursor: pointer;
  z-index:1;
  color: var(--blue-light);
  font-style: italic;
  z-index: 3;

  @media (min-width: 900px) {
    display: none
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;
  max-width: 2000px;
  margin: 0 auto;
  background: var(--gray-light);
  position: fixed;
  top:0;
  left:0;
  right: 0;

  @media(min-width: 1000px){
    padding: 1em 4em;
  }

  @media(min-width: 1200px){
    padding: 1em 8em;
  }
`;

export const ItemWrapper = styled.div`
  padding: 0em 0em 0em 0em;
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
  padding: 1em 0em;

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
  padding: 0.85em 0.3em 0.85em 1.3em;
  align-items: center;
`;

export const Input = styled.input<InputProps>`
  width: 83%;
  padding-left: 1.1em;
  font-size:1.2rem;
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
  padding: 1em 0em;
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
 
 @media (max-width: 900px) {
  background: var(--gray-light);
  color: var(--black);
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 0em;
  margin: 0em;
  left: 0;
  right: 0;
  top: 0;
 position: absolute;
 transform: translateX(0%);
}
`;

export const NavItem = styled.li`
  padding: 1em 0em;
 

  @media (min-width: 900px) {
    padding: 0em 0.8em;
  }

  &:hover{
    text-decoration: underline;
  }
`;

export const NavLink = styled.a<AnchorProps>`
  color: ${props => props.color == 'true' ? 'var(--black)' : props.name == 'login' || props.name == 'donate'  ? 'var(--white)' : null};
  font-size: 1rem;
  padding: 0.6em 1em;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 5px;
  background: ${props => props.name == 'donate' ? 'var(--red)' : props.name == 'login' ? 'var(--green)' : null};
  align-items: center;
  display: flex;
  z-index:10;

  :hover{
    text-decoration: none;
    color: ${props => props.name == 'donate' ? 'var(--white)' : "var(--black)"};
  }
`;
