import './App.css';
import NavBar from './components/navBar/NavBar' //🔸Importando por default
// import { NavBar } from './components/NavBar' // Importando SIN default

function App() {

  return (
    <div className="App">

      <NavBar/> {/* Siempre debo cerrar estos tags */}

      <section>
      </section>
    </div>
  );
}

export default App;
