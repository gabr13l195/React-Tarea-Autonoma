import { useState } from "react";

export const UseStateContador = () => {

    const [valorContador, setValorContador] = useState<number>(0); 

    const aumentarContador = (numero: number) => {
        setValorContador(valorContador + numero);
    }

    const disminuirContador = (numero: number) => {
        setValorContador(valorContador - numero);
    }

    return (
        <div>
            <h1>Ejercicio #5 - useStateContador</h1>
            <h3>Contador: <small>{valorContador}</small></h3>
            <button
                className='btn btn-secondary'
                onClick={() => aumentarContador(5)}
            >
                +5
            </button>
            &nbsp;
            <button
                className='btn btn-secondary'
                onClick={() => disminuirContador(5)}
            >
                -5
            </button>
        </div>
    )
}
