const products = [
  { name: 'AirPods', category: 'AirPods', price: 99.99, img: 'airpods.jpg' },
  { name: 'Apple Gift Card', category: 'Gift Cards', price: 25.00, img: 'giftcard.jpg' },
  { name: 'MacBook Stand', category: 'MacBook Accessories', price: 49.99, img: 'macbookstand.jpg' }
];

function renderProducts(filteredProducts) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';

  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}

function searchProducts() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  if (filteredProducts.length > 0) {
    renderProducts(filteredProducts);
  } else {
    alert("Product not found! Please suggest it.");
    window.location.href = "mailto:obioraokafor370@gmail.com?subject=Product Suggestion";
  }
}

function filterCategory(category) {
  const filteredProducts = products.filter(product => product.category === category);
  renderProducts(filteredProducts);
}

// Initial product display
renderProducts(products);