import { ProductButton } from "./styleItemCount"


const Contador = ({setContador,contador,stock}) =>{
    
    let cantidadItem = {contador}.contador    

    const addToCart = () =>{
        alert('Cantidad a agregar ' + cantidadItem)
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


        <ProductButton onClick={onDecrease}>-</ProductButton>
        <ProductButton onClick={onIncrease}>+</ProductButton>

        <div>
            <ProductButton onClick={addToCart} >Agregar al pedido</ProductButton>
        </div>
        
    </>
}

export default Contador;