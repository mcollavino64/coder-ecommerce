import { Link } from "react-router-dom";
import Contador from "../itemCount/itemCount";
import {useState} from 'react';
import {itemContainer,itemContent} from "../item/itemContainer"

function Item(props) {
  const [contador,setContador] = useState(0);
  return (
     <div style={{ border: "2px grey solid", margin: "5px" }}>
     {/* <itemContent>
         <itemContainer>       */}
                <h3 style={{ fontSize:"1000"}} >{props.name}</h3>
                <h3>$ {props.price}</h3>
                <h3>stock {props.stock}</h3>
                {/* { <button onClick={() => props.onAdd(props)}>agregar</button> } */}
                <Link to={`/item/${props.id}`} style={{ fontSize:"1"}} >ir al detalle</Link>
                

                El contador es : {contador}
                    <Contador setContador={setContador} contador={contador} stock={props.stock}></Contador>          
         {/* </itemContainer>
     </itemContent>     */}
     </div> 
  );
}

export default Item;
