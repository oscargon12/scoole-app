/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import ItemList from '../ItemList/ItemList'

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
        getData()
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
            })

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
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={products}/>
            }
            </Row>
        </Container>
    )
}