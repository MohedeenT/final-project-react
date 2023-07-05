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

  const handleDelete = (itemToDelete)=>{
    setState((draft)=>{
      draft.cart = draft.cart.filter((item)=>{
        return item.id !== itemToDelete.id
      })
    })
  }

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
      <th></th>
    </tr>
  </thead>
  <tbody>
    {state.cart.map((cartItem, index)=>(
      <tr key={`item-${index}`}>
      <td>{cartItem.name}</td>
      <td>${cartItem.price}</td>
      <td>{cartItem.quantityInCart}</td>
      <td>${(Number(cartItem.price * cartItem.quantityInCart)).toFixed(2)}</td>
      <td>
        <button
        onClick={()=>handleDelete(cartItem)}
        >Delete item</button>
        </td>
    </tr>
    ))}

  </tbody>
  <tfoot>
    <tr>
      <td colSpan="4" className="total">Total: ${
      state.cart.length > 0 
      ? state.cart.reduce((sum, product)=>{
        const productTotal = product.price * product.quantityInCart;
        const total =  sum + productTotal
        return total.toFixed(2)
      },0)  
      :"0.00"
      }</td>
      <td></td>
    </tr>
  </tfoot>
</table>


</div>
<div className="empty-cart">
  {state.cart.length === 0 && <p>Your cart is empty.</p>}
<button id="checkout-btn" target="_blank" rel="noreferrer">Proceed to Checkout</button>
</div>
</>)
}