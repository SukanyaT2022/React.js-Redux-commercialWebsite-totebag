import './App.css';
import {useDispatch } from 'react-redux';
import { setData } from '../src/store/productSlice';
import { useEffect } from 'react';
import Product from './componentFolder/Product';
import Navbar from './componentFolder/Navbar';
import ShoppingCart from './componentFolder/ShppingCart';

function App() {
  const dispatch = useDispatch();

  // Fetch data from api and store in redux store from counterSlice.js
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch(setData(data.products)));
      //dispatch help to call function from redux
  }, []);

  return <div>
    <Navbar/>
    <Product/>
    <ShoppingCart/>
  </div>;
}

export default App;
