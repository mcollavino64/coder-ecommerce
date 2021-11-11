import './App.css';
import React,{useState,createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import {ContainerGeneral} from "./ContainerGeneral";
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
// import {divWhiteContainer} from './components/divWhiteContainer/divWhiteContainer'; 

// import { GlobalStyle } from './globalStyles';

export const ThemeContext = createContext(); //context

function App() {

  const [contador,setContador] = useState(0);

  //context
  // const [carrito,setCarrito] = useState({});
  const [isDarkMode,setIsDarkMode] = useState(false);
  const switchDarkMode = () =>{
    setIsDarkMode(!isDarkMode);
  }
  
  return (
    // context
    <ThemeContext.Provider value={{isDarkMode,switchDarkMode}}>         
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

                  {/* <divWhiteContainer> */}
                      <button onClick={switchDarkMode}>Switchear Mode</button>
                  {/* </divWhiteContainer> */}

            </ContainerGeneral>        
    </ThemeContext.Provider>
  );
}

export default App;
