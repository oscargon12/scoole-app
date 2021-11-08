import './navBar.css'

const NavBar = () => {

    return (
        <header>
        <div className="logo">
          <h1>Scoole</h1>           
        </div>
        <nav> 
          <ul>
            <li><a href="https://www.google.com.co/" target="_blank" rel="noreferrer">Productos</a></li>
            <li><a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">Accesorios</a></li>
            <li><a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">Más info</a></li>  
          </ul>
        </nav>
      </header>
    )
}

export default NavBar //🔸Exportando por default