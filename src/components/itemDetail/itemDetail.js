import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledDetailContainer,ProductButtonDetail} from "./StyleItemDetail";


function ItemDetail(props) {
  const [cantidad, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
    // voy a motrar un boton que diga, terminar  mi compra
    // y me va a redigir a una nueva pagina /cart  que por ahora esta vacio
  };
  return (
    <StyledDetailContainer>      
      <h1> {props.name}</h1>
      <img src={props.img} />
      <h4>$ {props.price} {props.currency}</h4>
      {/* <h3>stock {props.stock}</h3> */}
      {/** crear el itemCount */}
      {/* <ItemCount onAdd={onAdd} /> */}      
      <ProductButtonDetail 
          onClick={(e) => {
          e.preventDefault();
          window.location.href='/';
          }}>Volver a productos
      </ProductButtonDetail>
      <ProductButtonDetail>Finalizar Compra</ProductButtonDetail>
    </StyledDetailContainer>
  );
}

export default ItemDetail;
