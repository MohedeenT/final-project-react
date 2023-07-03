import accessories from "./accessories";

export default function Home() {
  const handleDetailsClick = (id) => {
    // Logic to handle the details button click
    console.log("Details clicked for accessory with ID:", id);
  };

  return (
    <main>
      <section className="hero">
        <h1>Find the perfect accessories for your furry friends</h1>

        <a href="#" className="btn">
          Shop Now
        </a>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>

        {accessories.map((accessory) => (
          <div className="product" key={accessory.id}>
            <h3>{accessory.name}</h3>
            <p>Size: {accessory.Size}</p>
            <p>Price: {accessory.Price}</p>
            <img src={accessory.photo} alt={accessory.name} />

            <button onClick={() => handleDetailsClick(accessory.id)}>
              View Details
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
