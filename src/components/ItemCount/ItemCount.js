import React, { useState } from 'react' //Siempre importar el hook de useState
import { Button } from 'react-bootstrap'

function ItemCount({stock}) { //🔸 Este stock es el que valida desde productCar.js

    const [counter, setCounter] = useState(1); //useState(1) es el estado inicial del counter
    // [🔹counter:variable iterable, 🔸setCounter: funcion que modifica ese estado

    const addItem = () => {
        if(stock > counter){
            setCounter(counter + 1); //A cada onClick suma uno
            //🔸setCounter 🔹counter
        } else {
            alert('No hay más unidades disponibles')
        }
    }
    
    const removeItem = () => {
        if(counter > 1){
            setCounter(counter - 1);
        } else {
            alert('No se puede disminuir más')
        }
    }

    const response = () => {
        alert(`Agregaste ${counter} productos` )
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={removeItem}>-</Button>
                <h3>{counter}</h3>       
                <Button variant="primary" onClick={addItem}>+</Button>
            </div>

            <div>
                <Button variant="info" className="w-100 mt-3 text-white" onClick={response}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
        
    )
}

export default ItemCount

