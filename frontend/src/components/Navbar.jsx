import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  const logout = ()=>{ localStorage.removeItem('token'); window.location.href = '/'; };
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <Link to='/'>Home</Link> | <Link to='/cart'>Cart</Link> | <Link to='/register'> <wbr>Welcome</wbr></Link>
      <button onClick={logout} style={{ marginLeft: 12 }}>Logout</button>
    </nav>
  );
}