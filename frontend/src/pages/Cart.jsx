import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

export default function Cart(){
  const [cart, setCart] = useState([]);
  const nav = useNavigate();
  useEffect(()=>{ API.get('/cart').then(r=>setCart(r.data)).catch(()=>setCart([])); },[]);

  const remove = async (id)=>{ await API.post('/cart/remove',{ productId: id}); setCart(cart.filter(c=>c.product._id !== id)); };

  const checkout = ()=> nav('/checkout');

  const total = cart.reduce((s,c)=> s + c.qty * (c.product.price||0), 0);

  return (
    <div style={{ padding:16 }}>
      <h2>Your Cart</h2>
      {cart.length===0 ? <p>Empty. <Link to='/'>Shop now</Link></p> : (
        <div>
          {cart.map(c=> (
            <div key={c.product._id} style={{ borderBottom: '1px solid #eee', padding:8 }}>
              <strong>{c.product.name}</strong> x {c.qty} = ₹{c.qty * c.product.price}
              <button onClick={()=>remove(c.product._id)} style={{ marginLeft:8 }}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={checkout}>Proceed to checkout</button>
        </div>
      )}
    </div>
  );
}