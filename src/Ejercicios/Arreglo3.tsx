//Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
//const arreglo = [5,10,15,20,25,30,35,40,45,50]

import React from 'react';

export const Arreglo3 = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const dividirPorCinco = (arreglo: number[]): number[] => {
        return arreglo.map(numero => numero / 5);
    };
    
    const nuevoArreglo = dividirPorCinco(arreglo);

    return (
        <div>
            <h1 className='mt-3'>Ejercicio #3 - Arreglos</h1>
            <div>
                <h4>El arreglo original es: {JSON.stringify(arreglo)}</h4><br />
                <h3>El nuevo arreglo con los valores divididos por 5 es: {JSON.stringify(nuevoArreglo)}</h3>
            </div>
        </div>
    );
};
