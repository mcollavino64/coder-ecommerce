import {useEffect, useState} from 'react';
import {productsJson} from '../productJson/productsJson'
import ItemList from "../itemList/itemList"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const onAdd = (producto) => {
      console.log("agregaron un producto", producto);
    };
    
    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => resolve(productsJson), 3000);
      })
        .then((data) => setProducts(data))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return loading ? (
      <h1>Loading ...</h1>
    ) : (
      <ItemList products={products} onAdd={onAdd} />
    );
  }
  
  export default ItemListContainer;