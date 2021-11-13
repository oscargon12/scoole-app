import NavBar from './components/layout/navBar/NavBar' //🔸Importando por default
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from './components/layout/navBar/NavBar' // Importando SIN default
import ItemListContainer from './components/ListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">

      <NavBar brand="Scoole" link1="Productos" link2="Accesorios" link3="Más info"/> {/* Siempre debo cerrar estos tags */}
      <ItemListContainer greeting="Micro mobility" content="Los mejores productos en transporte alternativo"/> {/* 🔸 Enviando las props */}
    </div>
  );
}

export default App;
