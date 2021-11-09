import { Component} from "react";
import { FaPizzaSlice } from 'react-icons/fa';
import { CartWidgetStyle } from "./StyleCartWidget";

export default class CartWidget extends Component{
 
  render(){
    return <CartWidgetStyle> <FaPizzaSlice color="yellow"/> </CartWidgetStyle> ;
  }
}
