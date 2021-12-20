import { Navbar, Container, Nav } from 'react-bootstrap'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { BsBicycle } from 'react-icons/bs'

const NavBar = ( props ) => {

    const {brand, link1, link2, link3 } = props

    return (
    
    <Navbar bg="dark" variant="dark">
      <Container className="d-block d-sm-flex">
        <Navbar.Brand href="#home" className="fw-bold text-light d-flex justify-content-center"><Link to="/"><BsBicycle/> {brand}</Link></Navbar.Brand>
        <Nav className="ms-auto d-flex justify-content-center">
          <Nav.Link> <Link to="productos/bike">{link1}</Link></Nav.Link>
          <Nav.Link> <Link to="productos/scooter">{link2}</Link></Nav.Link>
          <Nav.Link> <Link to="productos/longboard">{link3}</Link></Nav.Link>
        </Nav>

        <CartWidget/>
      </Container>
    </Navbar>
    )
}

export default NavBar //🔸Exportando por default