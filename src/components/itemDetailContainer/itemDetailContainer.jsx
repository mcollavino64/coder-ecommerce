import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "../productJson/productsJson"
import ItemDetail from "../itemDetail/itemDetail"

//FIREBASE...INICIO
// import { getFirestore } from "@firebase/firestore";
// import {collecion,getDoc,doc} from "firebase/firestore"
// import { useEffect } from "react";
//FIREBASE...FIN


function ItemDetailContainer() {

    //FIREBASE...INICIO
  // useEffect(() => {
  //   const db = getFirestore();
  //   const pizzaRef = doc(db,"items","HLA2HcNxhvyFOWwfFL3z");    
  // }, [])
  //FIREBASE...FIN

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
    
  return (<ItemDetail {...product} />);
}

export default ItemDetailContainer;
