import React from 'react';

//  Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo

const sumarElementos = (arreglo: number[]): number => {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
};

export const Arreglos2 = () => {
    const arregloEjemplo: number[] = [1, 2, 3, 4, 5];
    
    const suma = sumarElementos(arregloEjemplo);

    return (
        <div>
            <h1 className='mt-3'>Ejercicio #2 - Arreglos</h1>
            <div>
                <h4>El arreglo es: {JSON.stringify(arregloEjemplo)}</h4><br />
                <h3>La suma de los elementos del arreglo es: {suma}</h3>
            </div>
        </div>
    );
};
