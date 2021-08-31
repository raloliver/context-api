import TotalContext from "../store/total-context";

const Cart = (props) => {
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div>
            <h3>Cart Component</h3>
            <hr />
            <ul>
              {props.cart.map((product, index) => {
                return <li key={index}>{product.name} </li>;
              })}
            </ul>
            <p>Subtotal: {total}€</p>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};

export default Cart;
