import React from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'

export const ItemDetail = (props) => {

    const { name, img, stock, price, category } = props

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1) // Historial una página atrás en el historial
    }

    const handleToIndex = () => {
        navigate('/') // Historial ruta específica
    }

    return (
        <>
            <Row>
                <Col className="mt-4">
                    <Button className="btn btn-primary me-2" onClick={handleBack}>Volver</Button>
                    <Button className="btn btn-info text-white" onClick={handleToIndex}>Ir al inicio</Button>
                </Col>
            </Row>
            <Card className="mt-3">
                <Card.Header as="h5" className="text-muted">{name}</Card.Header>
                <Card.Body>
                    <Row>
                    <Col xs={6}>
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
                        <Row className="mt-4">
                        <Col xs={6}>
                                <ItemCount stock="5"/>
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </>
    )
}
