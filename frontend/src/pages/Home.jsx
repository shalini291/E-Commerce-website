import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{ API.get('/products').then(r=>setProducts(r.data)).catch(console.error); },[]);
  return (
    <div style={{ padding: 16 }}>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {products.map(p => (
          <div key={p._id} style={{ border: '1px solid #ccc', padding: 8 }}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <Link to={`/product/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}