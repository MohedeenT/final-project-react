import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Hello from "./components/Hello";
import { createContext } from "react";
import { useImmer } from "use-immer";
import accessories from "./data/accessories";

const stateContext = createContext();

function App() {
  
  const [state, setState] = useImmer({
    data: accessories,
    query: "",
    filteredData: [],
    cart: [{
      id: "product-4",
      photo:
        "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
      name: "Ball",
      price: "5",
      category: "Toys",
      quantityInCart: 2,
    }]
  });

  return (
    <stateContext.Provider value={{state,setState}}>
      <header> {<Hello />} </header>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <p>&copy; 2023 Pet Accessories Store. All rights reserved.</p>
      </footer>
    </stateContext.Provider>
  );
}

export  {App, stateContext};
