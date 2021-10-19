import './App.css';
import React,{useState} from 'react';
import {NavBar} from './components/NavBar.js'
import ItemListContainer from "./components/ItemListContainer"
import Contador from './components/itemCount';

function App() {

  const list = [{ title: "item de lista 1" },
  { title: "item de lista 2" },
  { title: "item de lista 3" }
  ]
  
  const [contador,setContador] = useState(0);
  const stock = 3;

  const onIncrease = () => {
    if (stock>contador) {
      setContador(contador + 1)  
    }
  }

  const onDecrease = () => {
    if(contador>=1){
      setContador(contador - 1)
    }    
  }

  return (
    <div className="App">
     <NavBar/>
      <div className="content">
          Esto es el contenido.
        <section>
          <h3>  <ItemListContainer greeting={list} /> </h3>
          El contador es : {contador}
          <Contador onIncrease={onIncrease} onDecrease={onDecrease} contador={contador} ></Contador>
        </section>
      </div>
    </div>
  );
}

export default App;
