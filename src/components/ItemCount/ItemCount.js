import React, { useState } from 'react' //Siempre importar el hook de useState
import { Button } from 'react-bootstrap'

function ItemCount({ max, cantidad, setCantidad, onAdd }) { //🔸 Este max={stock} es una prop de itemDetail
                                            //🟢 onAdd viene del ItemDetail

    const [counter, setCounter] = useState(1); //useState(1) es el estado inicial del counter
    // [🔹counter:variable iterable, 🔸setCounter: funcion que modifica ese estado

    //El estado está en el componente padre, pero los handlers estan en el componente hijo
    const handleAddItem = () => {
        max > counter
            ? setCounter(counter + 1) //A cada onClick suma uno
            //🔸setCounter 🔹counter
            : alert('No hay más unidades disponibles')
    }
    
    const handleRemoveItem = () => {
        counter > 1
           ? setCounter(counter - 1)
           : alert('No se puede disminuir más')
    }

    //Función de agregar al carrito, se pasa a ItemDetail
    /* const response = () => {
        alert(`Agregaste ${counter} productos` )
    } */

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleRemoveItem}>-</Button> {/* Handler para sumar */}
                <h3>{counter}</h3>       
                <Button variant="primary" onClick={handleAddItem}>+</Button>
            </div>

            <div>
                <Button variant="info" className="w-100 mt-3 text-white" onClick={onAdd}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
        
    )
}

export default ItemCount

