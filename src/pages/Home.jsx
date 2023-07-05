import accessories from "../data/accessories";
import { useImmer } from "use-immer";
import { useEffect } from "react";

export default function Home() {

  const [state, setState] = useImmer({
    data: accessories,
    query: "",
    filteredData: [],
  });

  useEffect(() => {
    setState((draft) => {
      (draft.filteredData = state.data.filter((data) => {
        return data.name.toLowerCase().indexOf(state.query) > -1;
      }));
    });

    console.log(state.filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query]);

  const handleDetailsClick = (id) => {
    // Logic to handle the details button click
  };

  const handleClick = (buttonText)=>{
    console.log(buttonText);
    switch (buttonText) {
      case "Safety":
        setState((draft) => {
        draft.filteredData = state.data.filter((data) => {
          return data.category === "Safety";})
        })
          break;
      case "Home":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Home";})
          })
        break;
      
      case "Clothes":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Clothes";})
          })
        break;
      
      case "Toys":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Toys";})
          })
        break;
    
      default:
        break;
    }
  }

  return (
    <main>
      <section className="hero">
        <h1>Find the perfect accessories for your furry friends</h1>
        <h2>Categories</h2>
        <div className="cat-btns" style={{margin: "10px"}}>
          <button
          onClick={e=>handleClick(e.target.textContent)}
          >Safety</button>
          <button
          onClick={e=>handleClick(e.target.textContent)}
          >Clothes</button>
          <button
          onClick={e=>handleClick(e.target.textContent)}
          >Home</button>
          <button
          onClick={e=>handleClick(e.target.textContent)}
          >Toys</button>
        </div>
        <input 
        className="form-control rounded"
        id='search-bar'
        placeholder='Search...'
        onChange={(e)=>{
          setState((draft)=>{
            draft.query = e.target.value.toLowerCase()
          })
       }}
    />
      </section>
        {(state.query.length > 0 || state.filteredData.length < state.data.length) && state.filteredData.map((filteredAccessory)=>(
          <div className="product" key={filteredAccessory.id}>
            <h3>{filteredAccessory.name}</h3>
            <p>Price: {filteredAccessory.price}</p>
            <img src={filteredAccessory.photo} alt={filteredAccessory.name} />

            <button onClick={() => handleDetailsClick(filteredAccessory.id)}>
              Add to cart
            </button>
          </div>
        ))
        }
    </main>
  );
}
