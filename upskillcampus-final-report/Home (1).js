import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id}>
          <img src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;