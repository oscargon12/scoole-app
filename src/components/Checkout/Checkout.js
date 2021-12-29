import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { validateData } from '../../helpers/validateData'
import { collection, Timestamp, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite' //db
import Swal from 'sweetalert2'
import { BsLightningCharge } from 'react-icons/bs'

export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    //Estado inicial de los valores del formulario
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) =>{

        //Cambio de los valores del formulario
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Evaluando los campos desde helpers/validateData.js
        if (!validateData(values)) { return }

        const orden = { 
            buyer: {...values}, //Spread con los valores
            items: carrito, //Traído con el cartContext
            total: totalCompra(), //Traído con el cartContext
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)

        const orderRef = collection(db, "orders") //"collection_name"
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))
        
        const outOfStock = []

        const productos = await getDocs(q)

        //TODO: Hacer panel de admin de los productos

        productos.docs.forEach((doc) => {
            const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            
            addDoc(orderRef, orden)
            .then((res) => {
                batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su numero de orden es: ${res.id}`
                })
                vaciarCarrito()
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes produtos',
                text: outOfStock.map(el => el.name).joim(', ')
            })
        }
    }

    return (

        <section className='container'>
            {carrito.length === 0 //Si el carrito esta vacio...
                ? <Navigate to="/cart"/>
                : <div className='container mb-4 mt-5 pt-5'>
                <h2 className='bas-font gray75 mb-0'>Resumen de compra</h2>
                <hr/>
                
                <p>
                    Completa tus datos para finalizar la compra
                </p>
                <form onSubmit={handleSubmit}>

                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control mt-2 mb-0"
                            type="text"
                            placeholder="Nombre"
                            />
                            {values.nombre.length < 3 && <small className='gray75'>Debe tener almenos 3 caractéres</small>}
                        </div>

                        <div className='col-12 col-md-6'>
                            <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Apellido" />
                            {values.apellido.length < 4 && <small className='gray75'>Debe tener almenos 4 caractéres</small>}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control mt-3"
                            type="email"
                            placeholder="Email"
                            />
                            {values.email.length < 4 && <small className='gray75'>Ejem: name@domain.com</small>}
                        </div>
                        <div className='col-12 col-md-6'>
                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control mt-3"
                            type="email"
                            placeholder="Repita email"
                            />
                            {values.emailConfirm !== values.email && <small className='gray75'>Email no coincide</small>}
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn-success bas-font fs-5 mt-3 ps-2"> <BsLightningCharge/> Finalizar Compra</button>
                    </div>
                </form>
            </div>
            }
        
        </section>
        
    )
}


/* carrito.forEach((prod) => { //Por cada producto...
    const docRef = doc(productosRef, prod.id) //llamo a tds los productos
    getDoc(docRef)
        .then((doc) => { //Llamo a su data...
            updateDoc(doc.ref, {
                stock: doc.data().stock - prod.cantidad //Accedo a su stock
            })
        })
}) */