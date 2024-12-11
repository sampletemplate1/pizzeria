import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Order from './order';
import Build from './build';
import Footer from './footer';
import Cart from './cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/OrderPizza' element={<Order/>}></Route>
    <Route path='/BuildUrPizza' element={<Build/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Footer></Footer>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
