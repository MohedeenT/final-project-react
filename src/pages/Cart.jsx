import { useContext, useEffect } from "react";
import { stateContext } from "../App";

export default function Cart(){

  const { state, setState } = useContext(stateContext);

  // useEffect(() => {
  //   setState((draft) => {
  //     (draft.cart = state.data.filter((data) => {
  //       return data.quantityInCart> 0;
  //     }));
  //   });

  //   console.log(state.cart);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.cart]);

    return (<>
    <h1>Shopping Cart</h1>
<div id="shopCart">
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {state.cart.map((cartItem)=>(
      <tr>
      <td>{cartItem.name}</td>
      <td>{cartItem.price}</td>
      <td>{cartItem.quantityInCart}</td>
      <td>${(Number(cartItem.price * cartItem.quantityInCart)).toFixed(2)}</td>
    </tr>
    ))}

  </tbody>
  <tfoot>
    <tr>
      <td colSpan="3" className="total">Total:</td>
      <td>$39.98</td>
    </tr>
  </tfoot>
</table>


</div>
<div className="empty-cart">
  <p>Your cart is empty.</p>
<button id="checkout-btn" target="_blank" rel="noreferrer">Proceed to Checkout</button>
</div>
</>)
}