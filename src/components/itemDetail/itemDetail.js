import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledDetailContainer,ProductButtonDetail} from "./StyleItemDetail";
import Contador from "../itemCount/itemCount";
import { render } from "@testing-library/react";

function ItemDetail(props) {
  const [cantidad, setCantidad] = useState();
  const [contador,setContador] = useState(0);
  const [showCount,setShowCount] = useState(true);

  
  const onAdd = () => {
    console.log("agregaron un producto", props.id);
    console.log("agregaron la cantidad", contador);
    setShowCount(false);
    console.log(showCount)
    // voy a motrar un boton que diga, terminar  mi compra
    // y me va a redigir a una nueva pagina /cart  que por ahora esta vacio


  };
  
  return (
    <StyledDetailContainer>            
          <h1> {props.name}</h1>
          <img src={props.img} />
          <h4>$ {props.price} {props.currency}</h4>

          {showCount ? 
            <div>
                <h1> Cantidad : {contador} </h1> 
                <Contador 
                  setContador={setContador} contador={contador} stock={props.stock}>
                </Contador>     
                <ProductButtonDetail onClick={onAdd} >Agregar al pedido</ProductButtonDetail>         
            </div>         
            : 
            <ProductButtonDetail>Terminar mi compra</ProductButtonDetail>
          }

        <ProductButtonDetail onClick={(e) => {e.preventDefault();window.location.href='/';}}>Volver a productos</ProductButtonDetail>
    </StyledDetailContainer> 
  );
}

export default ItemDetail;
