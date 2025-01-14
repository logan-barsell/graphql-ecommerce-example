const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  products.filter(product => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find(product => product.id === id);
}

function addNewProduct(id, description, price) {
  const product = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(product);
  return product;
}

function addProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (!product) {
    return;
  }
  const rating = { rating, comment };
  product.ratings.push(rating);
  return rating;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addProductReview,
};
