import './App.css';
import {NavBar} from './components/NavBar.js'
// import 'bootstrap/dist/css/bootstrap.css'
// import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <NavBar/>
      <div className="content">
          Esto es el contenido.
      </div>
    </div>
  );
}

export default App;
