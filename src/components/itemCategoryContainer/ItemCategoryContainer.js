import {useEffect, useState} from 'react';
import {categoryJson} from '../productJson/categoryJson'
import ItemListCategory from '../itemListCategory/itemListCategory';

function ItemCategoryContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const onAdd = (producto) => {
      console.log("agregaron un producto", producto);
    };
    
    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => resolve(categoryJson), 0);
      })
        .then((data) => setProducts(data))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return (    
      // <div>Hola</div>
      <ItemListCategory products={products} onAdd={onAdd} />
    );
  }
  
  export default ItemCategoryContainer;