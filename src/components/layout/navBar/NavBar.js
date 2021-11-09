import './navBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
const NavBar = ( props ) => {

    const {brand, link1, link2, link3 } = props

    return (
    
    <Navbar bg="light" variant="light">
      <Container className="d-block d-sm-flex">
      <Navbar.Brand href="#home" className="fw-bold d-flex justify-content-center">{brand}</Navbar.Brand>
      <Nav className="ms-auto d-flex justify-content-center">
        <Nav.Link href="#products">{link1}</Nav.Link>
        <Nav.Link href="#accessories">{link2}</Nav.Link>
        <Nav.Link href="#info">{link3}</Nav.Link>
        <CartWidget/>
      </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar //🔸Exportando por default