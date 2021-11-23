import NavBar from './components/layout/navBar/NavBar' //🔸Importando por default
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from './components/layout/navBar/NavBar' // Importando SIN default
import ItemListContainer from './components/ListContainer/ItemListContainer';
//import { Team } from './components/Team/Team'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (

    <BrowserRouter> {/* Este engloba a toda la App */}

    <NavBar brand="Scoole" link1="Bicicletas" link2="Scooters" link3="Longboard"/> {/* Los componentes comunes van por fuera del <Routes></Routes> */}

    <Routes> {/* Engloba a todas las rutas, solo muestra un componente a la vez. Sensible a los cambios de ruta */}
      <Route path="/" element={ <ItemListContainer greeting="Micro mobility" content="Los mejores productos en transporte alternativo"/> }/> {/* maneja la ruta y el componente que quiero mostrar */} {/* 🔸 Enviando las props dentro del Route */}
      <Route path="/productos/:catId" element={ <ItemListContainer greeting="Micro mobility" content="Los mejores productos en transporte alternativo"/> }/> {/* maneja la ruta y el componente que quiero mostrar */} {/* 🔸 Enviando las props dentro del Route */}
      <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
      <Route path="*" element={ <Navigate to="/" /> }/> {/* Este redirecciona al inicio cuando no encuentra la ruta */}


    </Routes>

    </BrowserRouter>
  );
}

export default App;


// == HILO SUPERIOR ==
// App.js             = Base del proyecto
//  ItemListContainer = presentacion (Contiene el catalogo de productos)
//    ItemList        = mapea el stock (que viene de una api)
//      item          = Recibe todos los props desde el ItemList

// == HILO INFERIOR ==
// ItemDetailContainer
//  ItemDetail
//    ItemCount