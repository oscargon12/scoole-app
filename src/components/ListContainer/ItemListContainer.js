import React from 'react'
import { Container } from 'react-bootstrap'

const ItemListContainer = (props) => {

    console.log(props)
    console.log(props.greeting)

    const {greeting, content} = props
    //🔸 Desestructurando

    return (
        
        <Container>
            <h3 className="mt-3 text-center">{greeting}</h3> {/* 🔸 Recibiendo el props.greeting desestructurado */}
            <p className="text-center">{content}</p>
        </Container>
    )
}

export default ItemListContainer
