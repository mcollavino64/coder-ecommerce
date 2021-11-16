import {createContext, useContext, useState} from 'react';
// import { ThemeContext } from '../context/ThemeContext';

const ThemeContext = createContext(); //context

export const useCart = () => useContext(ThemeContext);

export const cartProvider = ({children}) => {
    // const [cart, setCart] = useState([]); DA ERROR NO SE POR QUE

    const addItem = (item) =>{
        setCart([...cart,item]);
    }

    const removeItem = (item) =>{
        const newCart = cart.filter((product) => product.id !== item.id);

		setCart(newCart);
    }

    return(
        <ThemeContext.Provider value={{cart,addItem,removeItem}}>
            {children}
        </ThemeContext.Provider>
    )
}