import React, { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.scss'
import { Link } from 'react-router-dom'
//import { Badge } from 'react-bootstrap'

export const CartWidget = () => {

    const { totalCantidad, carrito } = useContext(CartContext)
    return (
        <div className={ `mt-0 ml-5  text-white ${ carrito.length === 0 ? 'hidden widget' : 'widget' }`}>
            <Link to="cart">
                <BsCartFill/>
            </Link>
            <span className='bas-font ms-1'>{totalCantidad()}</span>
        </div>
    )
}
