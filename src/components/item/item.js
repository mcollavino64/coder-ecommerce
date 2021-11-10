import { Link } from "react-router-dom";
import {StyleItemFont} from "../item/styleItem";
import "../item/item.css";

function Item(props) 
{
  return (    
    
        <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={props.img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.description}</p>
          <h3>Listas para salir:  {props.stock}</h3> 
          <a href={`/item/${props.id}`} class="btn btn-primary">Detalle</a>
        </div>
        </div>
    
  );
}

export default Item;
