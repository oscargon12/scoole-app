import { Navbar, Container, Nav } from 'react-bootstrap'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { BsLightningCharge } from 'react-icons/bs'
import '../../scss/main.scss'

const NavBar = ( props ) => {

    const {brand, link0, link1, link2, link3 } = props

    return (
    
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="d-block d-sm-flex">
        <Navbar.Brand href="#home" className="d-flex justify-content-center"><Link className='nav-brand bas-font' to="/"><BsLightningCharge/> {brand}</Link></Navbar.Brand>
        
        <Nav className="ms-auto d-flex justify-content-center">
          <Nav.Link> <Link className='nav-link text-white py-0' to="productos">{link0}</Link></Nav.Link>
          <Nav.Link> <Link className='nav-link text-white py-0' to="productos/bike">{link1}</Link></Nav.Link>
          <Nav.Link> <Link className='nav-link text-white py-0' to="productos/scooter">{link2}</Link></Nav.Link>
          <Nav.Link> <Link className='nav-link text-white py-0' to="productos/longboard">{link3}</Link></Nav.Link>
          <CartWidget className='mt-1'/>
        </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar //🔸Exportando por default