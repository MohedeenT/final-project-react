export default function Home() {

    return(
    <main>
        <section className="hero">
          <h1>Welcome to Pet Accessories Store</h1>
          <p>Find the perfect accessories for your furry friends.</p>
          <a href="#" className="btn">Shop Now</a>
        </section>
    
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="btn">View Details</a>
          </div>
          <div className="product">
            <img src="product2.jpg" alt="Product 2"/>
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="btn">View Details</a>
          </div>
        </section>
      </main>)

}