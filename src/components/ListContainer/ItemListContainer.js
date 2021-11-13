import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import prod1 from '../assets/img/products/boosted-mini-x_1_2000x.png'

const ItemListContainer = (props) => {

    console.log(props)
    console.log(props.greeting)

    const {greeting, content} = props
    //🔸 Desestructurando

    return (
        
        <Container>
            <Row>
                <h3 className="mt-3 text-center">{greeting}</h3> {/* 🔸 Recibiendo el props.greeting desestructurado */}
                <p className="text-center">{content}</p>
            </Row>
            <Row>
                <Col xs={12} md={4} className="mx-auto">
                    <ProductCard img={prod1} name="Boosted Mini" stock="5"/> {/* 🔹Este es el stock de la tarjeta */}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer
