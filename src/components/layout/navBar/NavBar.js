import './navBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = ( props ) => {

    const {brand, link1, link2, link3 } = props

    return (
    
    <Navbar bg="light" variant="light">
      <Container className="d-block d-sm-flex">
      <Navbar.Brand href="#home" className="fw-bold d-flex justify-content-center"><Link to="/">{brand}</Link></Navbar.Brand>
      <Nav className="ms-auto d-flex justify-content-center">
        <Nav.Link> <Link to="/">Productos</Link></Nav.Link>
        <Nav.Link> <Link to="productos/bike">{link1}</Link></Nav.Link>
        <Nav.Link> <Link to="productos/scooter">{link2}</Link></Nav.Link>
        <Nav.Link> <Link to="productos/longboard">{link3}</Link></Nav.Link>
        <CartWidget/>
      </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar //🔸Exportando por default