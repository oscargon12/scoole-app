import React from 'react'
import { BsCartFill } from 'react-icons/bs'
//import { Badge } from 'react-bootstrap'

const CartWidget = () => {
    return (
        <div className="mt-1 ml-3">
            <BsCartFill/> {/* <Badge bg="danger" className="rounded-circle">2</Badge> */}
        </div>
    )
}

export default CartWidget
