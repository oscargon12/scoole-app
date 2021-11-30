import React from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Cart = () => {
    return (
        <main className="container">
            <Row className="mt-5">
                <Col>
                    <Card>
                    <Card.Header>Carrito de compras</Card.Header>
                    <Card.Body>
                        <Card.Title>Agregando productos</Card.Title>
                        <Card.Text>
                        Próximamente...
                        </Card.Text>
                        <Link to="/" variant="primary" className="btn btn-primary">Go somewhere</Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </main>
    )
}
