import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
//import { getData } from '../../helpers/getData'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'
import { doc, getDoc, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState()

    const {itemId} = useParams() //Dame el itemId a traves de los params de react-router

    useEffect(() => {
        setLoading(true)

        const productRef = collection(db, 'productos')
        const docRef = doc(productRef, itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({ //Se hace un setItem del objeto
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })


        /* getData()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            }) */

    }, [itemId])

    return (
        <div className="container">
            {
                loading /* Si loading es true, muestre cargando */
                  ? <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                  
                  : <ItemDetail {...item}/>
            }
        </div>
    )
}
