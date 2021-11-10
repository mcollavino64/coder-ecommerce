import {useEffect, useState} from 'react';
import {productsJson} from '../productJson/productsJson'
import ItemList from "../itemList/itemList"
import "../itemListContainer/ItemListContainer.css"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // const onAdd = (producto) => {
    //   console.log("agregaron un producto", producto);
    // };
    
    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => resolve(productsJson), 0);
      })
        .then((data) => setProducts(data))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    // return loading ? (
    //   <h1>Loading ...</h1>
    // ) : (
    //   <ItemList products={products} onAdd={onAdd} />
    // );

    return (   
      <div className="Items">
        { <ItemList products={products}  /> /*onAdd={onAdd} */}
      </div>
    );
  }
  
  export default ItemListContainer;