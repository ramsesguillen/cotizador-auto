import React from 'react'
import styled from 'styled-components';
import { primerMayuscula } from '../helpers/helper';

export const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos;

    if ( marca === '' || year === '' || plan === '' ) return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { primerMayuscula( marca ) }</li>
                <li>Plan: { primerMayuscula( plan ) }</li>
                <li>Año del Auto: { year }</li>
            </ul>
        </ContenedorResumen>
    )
}

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;
