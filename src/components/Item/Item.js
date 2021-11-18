import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

//Aca renderizo la tarjeta del producto
const ProductCard = ( props ) => {

    const { name, img, stock, price } = props // 🔹Este es el stock de la tarjeta
    return (
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Precio: {price}
                </Card.Text>
                <Card.Text>
                    Disponibles: {stock}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ItemCount stock="5"/> {/*🔸 Este stock es el que valida en el ItemCount.js */}
            </Card.Footer>
        </Card>
    )
}

export default ProductCard
