import React from 'react'
import styled from 'styled-components';


export const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{ titulo }</TextoHeader>
        </ContenedorHeader>
    )
}
const ContenedorHeader = styled.header`
    background-color: #26c6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;
