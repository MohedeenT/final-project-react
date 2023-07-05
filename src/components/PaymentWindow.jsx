import { useContext } from "react";
import { stateContext } from "../App";

export default function PaymentWindow(){

    const { state, setState } = useContext(stateContext);

    const handleExit = ()=>{
      setState((draft)=>{
        draft.showPayWindow = !draft.showPayWindow;
        })
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      alert("order placed!")
      handleExit()
      setState((draft)=>{
        draft.cart = []
        draft.orderId = crypto.randomUUID()
      })
    }

    return(
        <>
      <div 
      className='modal'
      style={{display: state.showPayWindow ? 'block':'none'}}
      >
    <div className='background'></div>
      <div className="modal-container">
        <div className='header'>
        <h2
        style={{textAlign: 'left'}}>Please enter your payment information</h2>
        <button
        onClick={handleExit}
        >x</button>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Card Number:
        <input
          type="text"
          maxLength={16}
          required
        />
      </label>
      <label>
        Cardholder Name:
        <input
          type="text"
          required
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          maxLength={5}
          required
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          maxLength={3}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  </div>
  </>
    )

}