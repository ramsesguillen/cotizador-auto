import React, { useState } from 'react'
import styled from 'styled-components';
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from '../helpers/helper';

export const Formulario = ({ setResumen, setCargando }) => {

    const initialState = { marca: '', year: '', plan: '' }

    const [datos, setDatos] = useState( initialState );

    const [error, setError] = useState( false );

    const { marca, year, plan } = datos;

    const handleChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ( marca.trim() === ''  || year.trim() === '' || plan.trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        // Base
        let resultado = 2000;

        // Diferencia de años
        const direfencia = obtenerDiferenciaYear( year );

        // por cada año hay que restar el 3%
        resultado -= ( ( direfencia * 3 ) * resultado ) / 100;

        resultado = calcularMarca( marca ) * resultado;

        const incrementoPlan = obtenerPlan( plan );

        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);

        setCargando( true );

        setTimeout(() => {
            setCargando( false );
            setResumen({
                cotizacion: resultado,
                datos
            });
            setDatos( initialState );
        }, 3000);


    }


    return (
        <form
            onSubmit={ handleSubmit }
        >
        {
            ( error ) && <Error>Todos  los Campos son obligatorios</Error>
        }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={ marca }
                    onChange={handleChange}
                >
                    <option value="">-- seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asicatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={ year }
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={ plan === 'basico' }
                    onChange={handleChange}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === 'completo' }
                    onChange={handleChange}
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;

    transition: background-color .3s ease-out;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;