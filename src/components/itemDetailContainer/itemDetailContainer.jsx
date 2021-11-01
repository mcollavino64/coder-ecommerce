import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productsJson } from "../productJson/productsJson"
import ItemDetail from "../itemDetail/itemDetail"

function ItemDetailContainer() {
  console.log('JSON ' + productsJson)
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productsJson.filter((item) => item.id === id)),
        0
      );
    }).then((data) => setProduct(data[0]));
  }, []);

  console.log("product", product);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
