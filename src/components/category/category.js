import { Link } from "react-router-dom";
import Contador from "../itemCount/itemCount";
import {useState} from 'react';
import {StyleItemCategory} from "../category/styledCategory"


function Category(props) {
  const [contador,setContador] = useState(0);
  return (
     <div>
     
    <StyleItemCategory>
         
                {/* <h3 style={{ fontSize:"1000"}} >{props.name}</h3>                 */}
                <h3>{props.name}</h3>                
                {/* <Link to={`/item/${props.id}`} style={{ fontSize:"1"}} >Ver detalle del producto</Link> */}
                {/* <div>
                <h3> Cantidad : {contador} </h3> 
                    <Contador 
                      setContador={setContador} contador={contador} stock={props.stock}>
                    </Contador> 
                </div> */}
                                 
     </StyleItemCategory>
      </div> 
  );
}

export default Category;
