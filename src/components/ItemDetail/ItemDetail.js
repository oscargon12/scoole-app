import React, {useState, useContext} from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Footer } from '../Footer/Footer'
import { GoChevronLeft } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { BsFillCartCheckFill } from 'react-icons/bs'

 
export const ItemDetail = (props) => {

    const { id, name, img, stock, price, category } = props

    const context = useContext(CartContext)
    console.log(context)
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0) //Cantidad en el carrito
    // [🔹cantidad:variable iterable, 🔸setCantidad: funcion que modifica ese estado
    //Esa función es usada en ItemCount por medio de context

    //const [agregado, setAgregado] = useState(false) //Si ya está agregado en el carrito

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1) // Historial una página atrás en el historial
    }

    const handleToIndex = () => {
        navigate('/') // Historial ruta específica
    }

    const handleAddToCart = () => {
        if (cantidad > 0) {

            agregarAlCarrito({
                id, name, price, img, cantidad
            })
            //setAgregado(true) //Esto controla el cambio de estado para el botón de terminar compar
        }
    }

    return (
        <>
            <Row className="mt-5">
                <Col className="mt-5">
                    <Button className="btn btn-danger me-2 ps-1" onClick={handleBack}> <GoChevronLeft className='mb-1'/> Volver</Button>
                    <Button className="btn" variant="outline-danger" onClick={handleToIndex}> <HiHome className='mb-1'/> Ir al inicio</Button>
                </Col>
            </Row>
            <Card className="mt-3 border-0">
                <Card.Body>
                    <Row>
                    <Col xs={6}>
                        <Image src={img} height="500" rounded />
                    </Col>
                    <Col className='my-auto ps-5'>
                        <h3 className='bas-font gray75 mb-0'> {name} </h3>
                        <h2 className="color-primary bas-font mb-0">Precio: USD {price}</h2>
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

                            {
                                !isInCart(id) //Devuelve true o false segun, si el producto se encuentra en el carrito
                                    ? <ItemCount  //Mejor llamar un componente externo que intertar todo el código de este (mover lógica completa a componentes de menor orden)
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}  /* 🔹Consumiendo el max desde itemCount. Los valores de cantidad también */
                                    onAdd={handleAddToCart} /* 🟢 Se envía a ItemCount */
                                    />
                                : <Link to="/cart" variant="primary" className="btn btn-success bas-font fs-5">Ir al carrito <BsFillCartCheckFill className='fs-6 ms-2'/></Link>
                            }
                                
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>

            </Card>

            <Footer/>
        </>
    )
}
