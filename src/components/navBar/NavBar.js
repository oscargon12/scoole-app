import './navBar.css'

const NavBar = () => {

    return (
        <header>
        <div className="logo">
          <h1>Scoole</h1>           
        </div>
        <nav> 
          <ul>
            <li><a href="https://www.google.com.co/">Productos</a></li>
            <li><a href="https://es.reactjs.org/">Accesorios</a></li>
            <li><a href="https://angular.io/guide/setup-local">Más info</a></li>  
          </ul>
        </nav>
      </header>
    )
}

export default NavBar //🔸Exportando por default