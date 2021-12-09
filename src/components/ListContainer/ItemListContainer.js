/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
//import { getData } from '../../helpers/getData'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


// useState: Variables de estado para nuestro componente 
// useEffect: Controla tiempos y ritmo de ejecución que queremos para el componente
    
export const ItemListContainer = (props) => {

    //console.log(props)
    //console.log(props.greeting)

    const {greeting, content} = props //🔸 Desestructurando

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const { catId } = useParams()

    // Funcion que retorna una promesa
    // const pedirDatos = (valor) => {
    //     return new Promise((resolve, reject) => {

    //         setTimeout(() => {
    //             resolve(stock)
    //             /* if(valor === true){
    //                 resolve('Promesa resuelta') //imprime 'Promesa resuelta'
    //             } else {
    //                 resolve('Promesa rechazada') //imprime 'Promesa rechazada'
    //             } */
    //         }, 2000)
    //     })
    // }

    const params = useParams()
    console.log(params)

    useEffect(() => {

        setLoading(true)

        // 1. armar la referencia ala colección
        const productRef = collection(db, 'productos')
                                //db es traida de firebase/config.js y productos es el nombre de la colección
        
        const q = catId //Si tengo catID la referencia es el query, si no, es productRef
            ? query(productRef, where('category', '==', catId)) //Comparo la propiedad categoría con el cat id
            : productRef
        //2. GET a esa referencia
        getDocs(q)
            .then((collection) => { //Collection es la respuesta
                const items = collection.docs.map((doc) => ({ //Los parentesis q contienen al objeto, mantienen el return implícito
                    id: doc.id,
                    ...doc.data()
                    //Este objeto trae el id generado por firebase y un spread con td lo demas
                }))
                console.log(items)
                //Mapeo la coleccion y retorno un item por cada documento de la colleción

                setProducts(items)
            })
            .finally(() => {
                setLoading(false)
            })

        // Funcion get data es local
        /* getData()
            .then( (resp) => {

                if (!catId){ //Condicionando la respuesta con el catId (filtrar)
                    setProducts(resp)
                } else {
                    setProducts(resp.filter(prod => prod.category === catId)) //Filtro
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            }) */

    }, [catId]) //El [] significa que el useEffect, se aplica solo en el montaje
        //El catId es el que permite cambiar de componente, cuando cambie la URL
    return (
        
        <Container>
            <Row>
                <h3 className="mt-3 text-center">{greeting}</h3> {/* 🔸 Recibiendo el props.greeting desestructurado */}
                <p className="text-center">{content}</p>
            </Row>
            <Row>
            {
                loading 
                    ? <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    : <ItemList items={products}/>
            }
            </Row>
        </Container>
    )
}