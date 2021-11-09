import { Link } from "react-router-dom";
import Contador from "../itemCount/itemCount";
import {useState} from 'react';
import {StyleItemFont} from "../item/styleItem"


function Item(props) {
  const [contador,setContador] = useState(0);
  return (
     <div style={{ border: "2px grey solid", margin: "5px" }}>
     
    <StyleItemFont>
         
                <h3 style={{ fontSize:"1000"}} >{props.name}</h3>                
                <h3>Listas para salir:  {props.stock}</h3>

                {/* { <button onClick={() => props.onAdd(props)}>Agregar</button> } */}

                <Link to={`/item/${props.id}`} style={{ fontSize:"1"}} >Ver detalle del producto</Link>
                <div>
                <h3> Cantidad : {contador} </h3> 
                    <Contador 
                      setContador={setContador} contador={contador} stock={props.stock}>
                    </Contador> 
                </div>
                                 
     </StyleItemFont>
      </div> 
  );
}

export default Item;
