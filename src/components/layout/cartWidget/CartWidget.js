import React, { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'
//import { Badge } from 'react-bootstrap'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)
    return (
        <div className="mt-1 ml-3">
            <BsCartFill/> {/* <Badge bg="danger" className="rounded-circle">2</Badge> */}
            <span>{totalCantidad()}</span>
        </div>
    )
}
