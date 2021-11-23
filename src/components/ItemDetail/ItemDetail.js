import React from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'

export const ItemDetail = (props) => {

    const { name, img, stock, price, category } = props

    return (
        <div>
        <Card className="mt-5">
            <Card.Header as="h5" className="text-muted">{name}</Card.Header>
            <Card.Body>
                <Row>
                <Col xs={6} md={4}>
                    <Image src={img} height="300" rounded />
                </Col>
                <Col>
                    <Card.Title className="text-info">Precio: {price}</Card.Title>
                    <div className="d-flex mb-0">
                        <Card.Text className="me-2 mb-0">
                            Disponibles: {stock}
                        </Card.Text>
                        <Card.Text className="text-muted">
                        <small> {category} </small>
                        </Card.Text>
                    </div>
                    <Button variant="info" className="mt-4 text-white">Agregar</Button>
                </Col>
                </Row>
            </Card.Body>
        </Card>
        </div>
    )
}
