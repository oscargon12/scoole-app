import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from 'react-bootstrap'
import { BsFillCartXFill } from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import { GoChevronLeft } from 'react-icons/go'

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra, } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length > 0 
                ?   <section className='pt-4'>
                        <h2 className="bas-font gray75 mb-4 mt-3">Productos en el carrito</h2>
                        <div className="row mb-0">
                            <div className="col-md-3">
                                </div>
                                    <div className="col-md-8 d-none d-md-flex justify-content-between my-auto">
                                        <h6 className="gray9e mb-0">Producto</h6>
                                        <h6 className="gray9e mb-0 ps-5">&nbsp; Precio</h6>
                                        <h6 className="gray9e mb-0">Cantidad</h6>
                                        <p className="gray9e mb-0">&nbsp;</p>
                                    </div>
                            </div>
                        <hr className='mt-0'/>
                        <section>
                            {
                                carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                            }
                        </section>

                        <section className='bg-light rounded p-3 mt-4 d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <h3 className='bas-font me-2'> Total: ${totalCompra()} </h3>
                                <Link to="/Checkout" className="btn btn-success mx-2 bas-font fs-5">Terminar mi compra <BiCheck/> </Link>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button className="btn bas-font fs-6" variant="outline-danger" onClick={vaciarCarrito}><BsFillTrashFill className='fs-6'/> Vaciar carrito</Button>
                            </div>
                        </section>
                    </section>

                :   <section className='pt-4'>
                        <div className="text-muted d-flex justify-content-center mt-5">
                            <BsFillCartXFill size={50}/>
                        </div>
                        <h4 className="text-center text-muted mt-3 bas-font">No has agregado productos al carrito</h4>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <Link to="/" className="btn btn-danger bas-font ps-1"><GoChevronLeft className='mb-0'/> Volver</Link>
                        </div>
                    </section>
            }

            

        </div>
    )
}