import { useState } from "react";
import "./styles.css";
import Total from "./components/Total";
import Cart from "./components/Cart";
import TotalContext from "./store/total-context";

function App() {
  const products = [
    { name: "Apple", price: 4 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 3 },
    { name: "Grapes", price: 5 }
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  let handleProdudctChange = (event) => {
    let name = event.target.options[event.target.selectedIndex].text;
    let price = event.target.value;
    let shipping = 2;
    let shopCart = [...cart];
    let product = { name, price };
    let totalPrice = Number(price);
    totalPrice = total + totalPrice;
    shopCart.push(product);

    setCart(shopCart);
    setTotal(totalPrice);
    setShipping(shipping);
  };

  return (
    <div>
      <div>
        <h3>Purchase Component</h3>
        <hr />
        <select onChange={handleProdudctChange}>
          {products.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.name} - {product.price}€
              </option>
            );
          })}
        </select>
      </div>

      <TotalContext.Provider value={total}>
        <Cart cart={cart} />
        <Total shipping={shipping} />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
