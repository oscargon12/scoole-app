import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import '../scss/main.scss'
//import ItemCount from '../ItemCount/ItemCount'

//Aca renderizo la tarjeta del producto
const ProductCard = ( props ) => {

    const {id, name, img, stock, price, category } = props // 🔹Este es el stock de la tarjeta

    return (
        <Card className="m-2" border="0">
            <Card.Img variant="top" src={img} />
            <Card.Body className='py-0'>
                <Card.Subtitle className="text-muted">{name} | <small className='gray9e'> {category} </small></Card.Subtitle>
                <Card.Title className="bas-font color-primary mt-1 mb-0" >Precio: {price}</Card.Title>
                <div className="d-flex mb-0">
                    <Card.Text className="me-2 mb-0 text-14 gray42">
                        Disponibles: <span className='color-primary fw-bold'> {stock} </span> 
                    </Card.Text>
                </div>
            </Card.Body>
            <Card.Footer className='border-0 bg-white'>
               <Link to={`/detail/${id}`} className="btn btn-danger bas-font pt-1 pb-0 ps-3"> Ver más <FiChevronRight/> </Link>
            </Card.Footer>
        </Card>
    )
}

export default ProductCard
