import { useContext, useEffect } from "react";
import { stateContext } from "../App";

export default function Home() {
  const { state, setState } = useContext(stateContext);

  useEffect(() => {
    setState((draft) => {
      draft.filteredData = state.data.filter((data) => {
        return data.name.toLowerCase().indexOf(state.query) > -1;
      });
    });

    console.log(state.filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query]);

  const handleAddToCart = (product) => {
    alert(`added ${product.name} to cart!`);
    const existingItem = state.cart.find((item) => {
      return item.id === product.id;
    });
    existingItem
      ? setState((draft) => {
          draft.cart.map((cartItem) => {
            if (cartItem.id === product.id)
              return (cartItem.quantityInCart += 1);
          });
        })
      : setState((draft) => {
          draft.cart.push(product);
        });
  };

  const handleClick = (buttonText) => {
    const searchInput = document.getElementById("search-bar");
    searchInput.value = "";
    //Removes the search text when any category is clicked

    switch (buttonText) {
      case "Safety":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Safety";
          });
        });
        break;
      case "Home":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Home";
          });
        });
        break;

      case "Clothes":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Clothes";
          });
        });
        break;

      case "Toys":
        setState((draft) => {
          draft.filteredData = state.data.filter((data) => {
            return data.category === "Toys";
          });
        });
        break;

      default:
        break;
    }
  };

  return (
    <main>
      <section className="hero">
        <h1>Find the perfect accessories for your furry friends</h1>

        <h2>Categories</h2>

        <div id="cat-btns-container">
          <button onClick={(e) => handleClick(e.target.textContent)}>
            Safety
          </button>
          <button onClick={(e) => handleClick(e.target.textContent)}>
            Clothes
          </button>
          <button onClick={(e) => handleClick(e.target.textContent)}>
            Home
          </button>
          <button onClick={(e) => handleClick(e.target.textContent)}>
            Toys
          </button>
        </div>
        <input
          id="search-bar"
          placeholder="Search all items..."
          onChange={(e) => {
            setState((draft) => {
              draft.query = e.target.value.toLowerCase();
            });
          }}
        />
      </section>
      {(state.query.length > 0 ||
        state.filteredData.length < state.data.length) &&
        state.filteredData.map((filteredAccessory) => (
          <div className="product" key={filteredAccessory.id}>
            <h3>{filteredAccessory.name}</h3>
            <p>Price: {filteredAccessory.price}</p>
            <img src={filteredAccessory.photo} alt={filteredAccessory.name} />

            <button onClick={() => handleAddToCart(filteredAccessory)}>
              Add to cart
            </button>
          </div>
        ))}
    </main>
  );
}
