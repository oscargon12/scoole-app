import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { Image } from 'react-bootstrap'

export const CartItem = ({name, price, cantidad, id, img}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="row border-bottom">
            <div className="col-md-3">
             <Image src={img} height="150" rounded />
            </div>
            <div className="col-md-8 d-block d-md-flex justify-content-between my-auto">
                <h4 className="color-primary bas-font">{name}</h4>
                <h5 className="mb-2 bas-font">USD {price}</h5>
                <h5 className="text-muted bas-font"> {cantidad}</h5>
                <button 
                    className="btn btn-danger mb-3 mb-md-0"
                    onClick={() => { removerDelCarrito(id) }}
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar del carrito"
                >
                    <BsFillTrashFill/>
                </button>
            </div>

        </div>
    )
}