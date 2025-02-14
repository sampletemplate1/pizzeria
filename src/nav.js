import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <div>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white-50" href="#">Pizzeria</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link to='/'><img src="PizzeriaLogo.png" alt="img" width="60" height="50" style={{"marginRight":"25px","marginLeft":"10px"}}></img></Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to='/OrderPizza' style={{textDecoration:'none'}}>
          <a class="nav-link active text-white-50" aria-current="page" href="#" style={{"marginRight":"15px"}}> Order Pizza</a></Link>
        </li>
        <li class="nav-item">
            <Link to='/BuildUrPizza' style={{textDecoration:'none'}}>
          <a class="nav-link active text-white-50" href="#"> Build Ur Pizza</a></Link>
        </li>
        </ul>
        </div>
        <Link to='/cart'><button type="button" class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-cart4" viewBox="0 2 15 15">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> Shopping Cart</button></Link>
        </div>
        </nav>
        </div>
        );
    }
}
 
export default Nav;