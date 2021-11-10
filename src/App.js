import './App.css';
import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import {ContainerGeneral} from "./ContainerGeneral";
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
// import { GlobalStyle } from './globalStyles';


function App() {

  const [contador,setContador] = useState(0);
  
  return (
    <ContainerGeneral>
    <BrowserRouter>

          <header>
            <NavBar/>
          </header>

          <Switch>
            
            <Route exact path="/">
              <h1>  <ItemListContainer/> </h1>
            </Route>

            <Route exact path="/item/:id">            
              <ItemDetailContainer/>
            </Route>

            <Route exact path="/products/pizzas">            
            <h1>  <ItemCategoryContainer/> </h1>
            </Route>

          </Switch>

      </BrowserRouter>
      </ContainerGeneral>
  );
}

export default App;
