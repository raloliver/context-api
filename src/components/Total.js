import TotalContext from "../store/total-context";

const Total = (props) => {
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div>
            <h3>Total Component</h3>
            <hr />
            <small>Shipping: {props.shipping}€</small>
            <h2>Total : {total + props.shipping}€</h2>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};
export default Total;
