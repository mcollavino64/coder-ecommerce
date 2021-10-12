import './App.css';
import {NavBar} from './components/NavBar.js'
// import 'bootstrap/dist/css/bootstrap.css'
// import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import ItemListContainer from "./components/ItemListContainer"

function App() {

  const list = [{ title: "item de lista 1" },
  { title: "item de lista 2" },
  { title: "item de lista 3" }
  ]
  
  return (
    <div className="App">
     <NavBar/>
      <div className="content">
          Esto es el contenido.
        <section>
          <h3>  <ItemListContainer greeting={list}/> </h3>
        </section>
      </div>
    </div>
  );
}

export default App;
