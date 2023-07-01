export default function Cart(){
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

    <tr>
      <td>Product 1</td>
      <td>$19.99</td>
      <td>2</td>
      <td>$39.98</td>
    </tr>

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
</div>
<a href="https://www.google.com/" className="btn" target="_blank" rel="noreferrer">Proceed to Checkout</a>
</>)
}