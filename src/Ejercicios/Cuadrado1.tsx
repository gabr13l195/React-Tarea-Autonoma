import React from 'react';

// Crear una función con parámetros que permita calcular el área de un cuadrado.

export const Cuadrado1 = () => {
    let lado: number = 5;

    const area = (lado: number): number => {
        return lado * lado;
    }

    return (
        <div>
            <h1 className='mt-3'>Ejercicio #1 - Cuadrado</h1>
            <div>
                <h4>El cuadrado tiene lados de: {lado}</h4><br />
                <h3>El área es: {area(lado)}</h3>
            </div>
        </div>
    );
}