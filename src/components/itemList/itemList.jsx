import Item from "../item/item"
import "../itemList/itemList.css";

function ItemList({ products, onAdd }) {
  return (
    <>
      {products.map((item) => (        
          <Item {...item} onAdd={onAdd} />
      ))}
    </>
  );
}

export default ItemList;
