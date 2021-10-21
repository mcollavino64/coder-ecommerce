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


        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>

        <div>
            <button onClick={addToCart} >ADD TO CART</button>
        </div>
        
    </>
}

export default Contador;