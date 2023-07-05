const accessories = [
  {
    id: "product-1",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "Leash",
    size: "small",
    price: "$5",
    category: "Safety",
    quantityInCart: 0,
  },

  {
    id: "product-2",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "frisbee",
    size: "small",
    price: "$5",
    category: "Toys",
    quantityInCart: 0,
  },
  {
    id: "product-3",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "Harness",
    size: "small",
    price: "$5",
    category: "Safety",
    quantityInCart: 0,
  },
  {
    id: "product-4",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "Ball",
    size: "small",
    price: "$5",
    category: "Toys",
    quantityInCart: 0,
  },
  {
    id: "product-5",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "Bone",
    size: "small",
    price: "$5",
    category: "Toys",
    quantityInCart: 0,
  },
  {
    id: "product-6",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "mat",
    size: "small",
    price: "$5",
    category: "Home",
    quantityInCart: 0,
  },
  {
    id: "product-7",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "bed",
    size: "small",
    price: "$5",
    category: "Home",
    quantityInCart: 0,
  },

  {
    id: "product-8",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "hat",
    size: "small",
    price: "$5",
    category: "Clothes",
    quantityInCart: 0,
  },
  {
    id: "product-9",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "boots",
    size: "small",
    price: "$5",
    category: "clothes",
    quantityInCart: 0,
  },
  {
    id: "product-10",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "tshirt",
    size: "small",
    price: "$5",
    category: "clothes",
    quantityInCart: 0,
  },
  {
    id: "product-11",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "bowl",
    size: "small",
    price: "$5",
    category: "Home",
    quantityInCart: 0,
  },
  {
    id: "product-12",
    photo:
      "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    name: "pet carrier",
    size: "small",
    price: "$5",
    category: "Safety",
    quantityInCart: 0,
  },
];

export default accessories;
