// Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y
// calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.  

import React from 'react';

export const Objeto4 = () => {
    const alumnos = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedio = (alumnos: { nombre: string, edad: number, calificacion: number }[]): number => {
        const sumaCalificaciones = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        return sumaCalificaciones / alumnos.length;
    };

    // Calcular el promedio de las calificaciones
    const promedio = calcularPromedio(alumnos);

    return (
        <div>
            <h1 className='mt-3'>Ejercicio #4 - Arreglo de Objeto</h1>
            <div>
                <h4>Alumnos:</h4>
                <ul>
                    {alumnos.map((alumno, index) => (
                        <li key={index}>
                            {alumno.nombre} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
                        </li>
                    ))}
                </ul>
                <h3>El promedio de las calificaciones es: {promedio}</h3>
            </div>
        </div>
    );
};
