import axios from 'axios';
import React, { useEffect, useState } from 'react';
import green from './green.png';
import red from './red.png';
import order from './order.css';
   
  
function Order() {
      const [list,setState] = useState({list:[]});
      useEffect(()=>{
          
          axios.get("http://localhost:4000/pizzaordering")
          .then((response)=>setState({
              list:response.data
          })).catch(err => console.log(err))
      },[])
  
    let  getPizzas =(image, type,name,price,id) =>{
      alert(id+' Added to cart Successfully');
      var itemsInCartArray=[];
       itemsInCartArray = JSON.parse(sessionStorage.getItem("itemsInCart"));
       if(itemsInCartArray===null)
       itemsInCartArray=[];
      var item={
          "image":image,
          "type": type,
          "name":name,
          "price":price,
          "id":id
      };
      itemsInCartArray.push(item);
      sessionStorage.setItem("itemsInCart",JSON.stringify(itemsInCartArray));
      }
      
  
  

    return (
        <div class="container mt-3 p-3">
            <div class="row">
        {list.list.map((data, id) => (
            <div class="card">
          <div class="row">
            <div class="col-md-2">
              <div class="row">
                <b class="name">{data.name}</b>
                <img class="pizzaimages" src= {data.type==="veg" ? green :red} alt=".." />
                <b class="price">₹{data.price}</b>
            </div>
            </div>
            <div class="col-6">
              <div class="row">
              <p class="paragraph">{data.description}</p>
                <p class="paragraph"><b>Ingredients: </b>{data.ingredients}</p>
                <p class="paragraph"><b>Toppings: </b>{data.topping}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="row">
              <img src={data.image} alt="pizza" class='img'></img>
                <button type="button"  class="btn btn-warning" onClick={()=>getPizzas(data.image,data.type,data.name,data.price,data.id)} id="button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
            </div>
        ))}
          </div>
      </div>

    );

        }



export default Order;