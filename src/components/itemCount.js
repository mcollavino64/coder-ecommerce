const Contador = ({onDecrease,onIncrease,contador}) =>{
    
    let cantidadItem = {contador}.contador
    // console.log(cantidadItem)

    const addToCart = () =>{
        alert('Cantidad a agregar ' + cantidadItem)
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