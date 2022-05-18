import styled from 'styled-components'
import { AnchorProps } from '../../../interfaces/interface'

export const Container = styled.aside`
flex: 0 0 34%;
padding: 2em;
max-width: 550px;
margin: 1em auto;
background: #f3f4f6;
border-radius: 5px;
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
display: flex;

a{
    flex: 0 0 100%;
}

@media(min-width: 400px){
    a{
        flex: 0 0 48%;
    }
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