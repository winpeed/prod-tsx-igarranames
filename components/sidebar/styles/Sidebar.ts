import styled from 'styled-components'
import { AnchorProps } from '../../../interfaces/interface'

export const Container = styled.aside`
flex: 0 0 35%;
padding: 1em 0em 1em 2em;
max-width: 1000px;
margin: 0 auto;
`

export const Heading = styled.h3`
font-size: 1.2rem 
`

export const List = styled.ul`
line-height: 1.6;
column-width: 80px;
padding: 1.5em 0em;
margin: 0em;
flex-wrap: wrap;
list-style: none;
text-align: left;

@media(max-width: 768px){
    display: flex;
}
`

export const ListItem = styled.li`
padding: 0.25em 0em;
font-weight: 500;
width: 120px;
font-size: 1.1rem;
letter-spacing: 0.02em;
color: #007fb1;

:hover{text-decoration: underline;}
`

export const Anchor  =styled.a<AnchorProps>`

`