export default function Contact() {

    return(
    <>
    
    <h1>Contact Us</h1>
    <form action="#" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required/>
  
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" required/>
  
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
  
      <input type="submit" value="Submit"/>
    </form>
    </>)

}