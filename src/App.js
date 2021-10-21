import './App.css';
import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar'
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import {itemContainer,itemContent} from "./components/item/itemContainer"


function App() {

  // const list = [{ title: "item de lista 1" },
  // { title: "item de lista 2" },
  // { title: "item de lista 3" }
  // ]
  
  const [contador,setContador] = useState(0);
  
  return (
    <BrowserRouter>
    {/* <itemContent>
      <itemContainer>       */}
          <header>
            <NavBar/>
          </header>

          <div className="content">          
            <section>
              {/* <h3>  <ItemListContainer greeting={list} /> </h3> */}
              <Switch>
                
                <Route exact path="/">
                  <h1>  <ItemListContainer/> </h1>
                </Route>

                <Route exact path="/item/:id">            
                  <ItemDetailContainer/>
                </Route>

              </Switch>

        
            </section>
          </div>
        {/* </itemContainer>
      </itemContent> */}
      </BrowserRouter>
  );
}

export default App;
