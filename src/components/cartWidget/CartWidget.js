import { Component } from "react";
import { FaCartArrowDown } from 'react-icons/fa';

export default class CartWidget extends Component{
  render(){
    return <h3> <FaCartArrowDown color="red"/> </h3> ;
  }
}
