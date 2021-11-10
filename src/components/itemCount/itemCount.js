import { ProductButton } from "./styleItemCount"
import { useState } from "react";


const Contador = ({setContador,contador,stock,setFlagShowButton}) =>{
    
    let cantidadItem = {contador}.contador

    // const onClick = () =>{
    //   props.onAdd.(flagShowButton)
    // }

    const onAdd = () =>{
        // alert('Cantidad a agregar ' + cantidadItem)
        setFlagShowButton=true;
    }


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

      {/* {flag ?} */}

        <ProductButton onClick={onDecrease}>-</ProductButton>
        <ProductButton onClick={onIncrease}>+</ProductButton>

        <div>
            <ProductButton onClick={onAdd} >Agregar al pedido</ProductButton>
        </div>
        
    </>
}

export default Contador;