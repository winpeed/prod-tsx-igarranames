import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  border:2px solid #7f7f7f;
  padding: 1em 2em 2em 2em;
  flex: 0 0 55%;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px var(--gray-light);
  justify-content: space-between;
  line-height: 1.7;
  margin: 1em 0em 3em 0em;
`;

export const Heading = styled.h3`
font-size: 2.8rem;
`

export const Wrapper = styled.div`
padding: 0.1em 0em ;
`

export const MinHeading = styled.h4`
color: #007fb1;
text-transform: uppercase;
font-size: 0.85rem;
margin-top: 1em;
padding: 0.4em 0em; 
margin-top: 1em
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