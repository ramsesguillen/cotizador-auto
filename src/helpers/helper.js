
export const obtenerDiferenciaYear = year => new Date().getFullYear() - year;

export const calcularMarca = marca => {
    let incremento;

    switch ( marca ) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export const obtenerPlan = plan => ( plan === 'basico') ? 1.20 : 1.50;

// Muestra la primer letra mayuscula
export const primerMayuscula = texto => texto.charAt(0).toUpperCase() + texto.slice( 1 );