import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import CheckOut from './pages/Checkout.jsx'
import ProductList from './pages/ProductList.jsx';
import Register from './pages/Register.jsx';
import Navbar from './components/Navbar.jsx';

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/product' element={<ProductList/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

























































































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
