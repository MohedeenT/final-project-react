// import React, { useEffect, useState } from "react";

// const MyComponent = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   function fetchProducts() {
//     fetch("http://localhost:4000/products")
//       .then((res) => res.json())
//       .then((prods) => {
//         setProducts(prods);
//       })
//       .catch((error) => console.log(error));
//   }

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;

// import React, { useEffect, useState } from "react";

// const MyComponent = () => {
//   const [products, setProducts] = useState([]);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, [products]);

//   function fetchProducts() {
//     fetch("http://localhost:4000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((e) => setError("aa"));
//   }
//   return (
//     <>
//       <div>(xxxx){error}</div>
//       <div>{products[0].title}</div>
//     </>
//   );
// };

//<h2>{products.length}</h2>;
// return <pre>{JSON.stringify(products, null, 2)}</pre>;

//export default MyComponent;

import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => setError("Error fetching Jokes."));
  }

  const randomNumber = Math.floor(Math.random() * 3);

  return (
    <>
      <div>{error}</div>
      {products.length > 0 && <div>{products[randomNumber].joke}</div>}
    </>
  );
};

export default MyComponent;
