import { ProductButton } from "./styleItemCount"
import { useState } from "react";


const Contador = ({setContador,contador,stock}) =>{
    
  let cantidadItem = {contador}.contador

  const onIncrease = () => {
    if (stock>contador) {
      setContador(contador => contador + 1)  
    }
  }

  const onDecrease = () => {
    if(contador>=1){
      setContador(contador => contador - 1)
    }    
  }
    return <>

        <ProductButton onClick={onDecrease}>-</ProductButton>
        <ProductButton onClick={onIncrease}>+</ProductButton>
        
    </>
}

export default Contador;