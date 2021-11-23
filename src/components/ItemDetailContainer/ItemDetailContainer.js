import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState()

    const {itemId} = useParams() //Dame el itemId a traves de los params de react-router

    useEffect(() => {
        setLoading(true)

        getData()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="container">
            {
                loading /* Si loading es true, muestre cargando */
                  ? <h2>Cargando...</h2>
                  : <ItemDetail {...item}/>
            }
        </div>
    )
}
