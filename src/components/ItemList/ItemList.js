import React from 'react' //Se importan los hooks
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    
    /* const [items, setitems] = useState(false); //Controlo el estado de la info del componente
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setitems(data)
        })
    }, []) //El [] significa que lo anterior se ejecuta solo al inicio del ciclo de vida del componente
    //Que apenas se cargue el componente traiga la info de la base de datos
    
    //Ciclo de vida de los componentes 
    useEffect(() => {
        console.log(items)
    }, [items]) // Se ejecuta al comienzo del montaje */
    
    return (
        <div>
            {items ? /* Opcion verdadera */
            <Alert variant={'info'} className="py-2">
            <small> Hay items! </small>
            </Alert>
                : /* Opcion falsa */
                'Obteniendo info del servidor'

            }
            <Container>
                <h2 className="text-center">Conoce nuestros productos</h2>
                <Row>
                    <Col xs={12} className="mx-auto d-flex justify-content-between">
                    {items.map((prod) => <Item key={prod.id} {...prod}/>)} {/* 🔹Este es el stock de la tarjeta */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemList
