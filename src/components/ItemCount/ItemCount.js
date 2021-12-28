import React from 'react' //Siempre importar el hook de useState
import { Button } from 'react-bootstrap'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2'

function ItemCount({ max, setCantidad, cantidad, onAdd }) { //🔸 Este max={stock} es una prop de itemDetail
                                            //🟢 onAdd viene del ItemDetail

    //El estado está en el componente padre, pero los handlers estan en el componente hijo
    const handleAddItem = () => {
        max > cantidad
            ? setCantidad(cantidad + 1) //A cada onClick suma uno
            //🔸setCounter 🔹counter
            : Swal.fire({
                icon: 'info',
                title: 'No hay más unidades disponibles',
                })
    }
    
    const handleRemoveItem = () => {
        cantidad > 1
           ? setCantidad(cantidad - 1)
           : Swal.fire({
            icon: 'error',
            title: 'No se puede disminuir más',
            width: '20rem'
            })
    }

    //Función de agregar al carrito, se pasa a ItemDetail
    /* const response = () => {
        alert(`Agregaste ${counter} productos` )
    } */

    //Puedo enviar los atributos al elemento boton así 🔹
    const handleAddConfig = {
        className: `btn-block ${cantidad === max ? 'btn-danger' : 'btn-primary'}`, //las clases en comun se ponen en un template string
        onClick: handleAddItem, //Acción del boton
        disabled: cantidad === max //Disabled si...
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button
                 onClick={handleRemoveItem}
                 className={ `btn-block ${cantidad === 0 ? 'btn-secondary' : 'btn-dark'}` } //👈🏻 Optionanl styling, acompaña al control handleAddItem del ItemCount
                 disabled={cantidad === 0}
                 >
                     <FaMinus/>
                </Button> {/* Handler para sumar */}
                <h2 className='bas-font mb-0 mt-1'>{cantidad}</h2>       
                <Button  {...handleAddConfig} className='btn-danger'>  {/* 🔹Recibiendo el objeto handleAddConfig */}
                     <FaPlus/>
                 </Button>
            </div>

            <div className='mt-4'>
                <Button variant="primary" className="w-100 btn btn-danger bas-font pt-1 pb-0 ps-3 fs-5" disabled={cantidad === 0} onClick={onAdd}>
                    Agregar al carrito <BsFillCartCheckFill className='fs-6 ms-1'/>
                </Button>
            </div>
        </div>
        
    )
}

export default ItemCount



