import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import './App.css'
import CartProvider from './store/CartContext/CartProvider'
import CartContext from './store/CartContext/cart-context'
import Items from './Items'
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/').then(res => res.json()).then(data => setData(data))
  }, [])


  return (
    <CartProvider>
      {console.log(data)}
      < Nav />
      <main>
        <Items items={data} />
      </main>
    </CartProvider>
  );
}

export default App;



