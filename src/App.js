import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Elegant Red Dress', price: 499, size: 'M' },
  { id: 2, name: 'Summer Floral Dress', price: 399, size: 'S' },
  { id: 3, name: 'Classic Black Dress', price: 599, size: 'L' },
  { id: 4, name: 'Casual Dress', price: 299, size: 'M' }
];

const App = () => {
  const [filterSize, setFilterSize] = useState('All');
  const [filterPrice, setFilterPrice] = useState('');
  const [sortPrice, setSortPrice] = useState('asc');

  const filterProducts = (product) => {
    if (filterSize !== 'All' && product.size !== filterSize) return false;
    if (filterPrice && product.price > filterPrice) return false;
    return true;
  };

  const sortProducts = (a, b) => {
    if (sortPrice === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };

  const filteredAndSortedProducts = products
    .filter(filterProducts)
    .sort(sortProducts);

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Filters</h2>
        <label>
          Size:
          <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)}>
            <option value="All">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          />
        </label>
        <h2>Sort</h2>
        <label>
          Price:
          <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
        </label>
      </div>
      <div className="products">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price.toFixed(2)}</p>
            <p>Size: {product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
