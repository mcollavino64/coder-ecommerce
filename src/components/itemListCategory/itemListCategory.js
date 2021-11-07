import Category from "../category/category"

function ItemListCategory({ products, onAdd }) {
  return (
    <div>
      { products.map((item) => (
        <Category {...item} onAdd={onAdd} />
      ))}           
    </div>
  );
}

export default ItemListCategory;
