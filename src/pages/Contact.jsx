export default function Contact() {

  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = document.getElementById('messageForm');
    form.reset();
    alert("thank you for your message")
  }

    return(
    <>
    
    <h1>Contact Us</h1>
    <form
    id="messageForm"
    onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required/>
  
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" required/>
  
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
  
      <input 
      type="submit" 
      value="Submit"/>
    </form>
    </>)

}