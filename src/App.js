import React, { useState } from 'react'
import styled from 'styled-components';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header'
import { Resultado } from './components/Resultado';
import { Resumen } from './components/Resumen';
import { Spinner } from './components/Spinner';

export const App = () => {

    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: { marca: '', year: '', plan: '' }
    });

    const [cargando, setCargando] = useState( false );
    const { cotizacion, datos } = resumen;

    return (
        <Contenedor>
            <Header
                titulo="Cotizador de Seguros"
            />
            <ContenedorFormulario>
                <Formulario
                    setCargando={ setCargando }
                    setResumen={ setResumen }/>
                {
                    ( cargando ) ? <Spinner /> : <Resumen datos={ datos }/>
                }
                {
                    ( !cargando ) &&  <Resultado cotizacion={ cotizacion }/>
                }
            </ContenedorFormulario>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;