//ProductDetail

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(()=>{ API.get(`/products/${id}`).then(r=>setProduct(r.data)).catch(console.error); },[id]);

  const addToCart = async ()=>{
    await API.post('/cart/add', { productId: id, qty });
    alert('Added to cart');
  };

  if(!product) return <div>Loading...</div>;
  return (
    <div style={{ padding: 16 }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <input type='number' value={qty} min={1} onChange={e=>setQty(Number(e.target.value))} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

