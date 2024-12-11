import React from 'react';
import {useState,useEffect } from 'react';
import Ingredientscart from './ingredientscart';
import green from './green.png';
import red from './red.png';
import cart from './cart.css';

function Cart() {
     const [items,setState]=useState(JSON.parse(sessionStorage.getItem("itemsInCart")));
     const [toppingprice,setToppingPrice] = useState(JSON.parse(sessionStorage.getItem("toppingsPrice")));
     const [pizzascost,setPizzasCost] = useState(JSON.parse(sessionStorage.getItem("pizzaCost")));
     const [CartTotal,setCartTotal] = useState(JSON.parse(sessionStorage.getItem("totalPrice")));



    useEffect(()=>{
        debugger;
        var items=JSON.parse(sessionStorage.getItem("itemsInCart"))
        var total=0;
        for(var i=0;i<items.length;i++)
        {
            total=total+parseInt(items[i].price);
        }
        sessionStorage.setItem("pizzaCost",total);
        total=total+toppingprice;
        sessionStorage.setItem("totalPrice",total)
    },[])
    return (
        
    <div>
        <div class='container'>
        {/* <div class='col'>
                    <h1>this is for total</h1>
                    
                </div>  */}
                <div class='row'>
                <div class='col-6'>
                <div class='row '>
                    {items?.map((data,id)=>
                    <div>
                    <div class='col'>
                        <div class='row border mt-3 '>
                            <div class='col'>
                            <img class='cartpizzaimages'src={data.image}  alt="pizza" style={{"width":"70px","height":"70px"}}></img>   
                            <img class='carttypeimage'src= {data.type==="veg" ? green :red} style={{"width":"17px","height":"17px" ,"marginLeft":"25px"}} alt="..."/>
                            </div>
                            <div class='col'>            
                                <h6 style={{"margin-top":"20px"}}>{data.name}</h6>
                            </div>
                            <div class='col'>
                            <h6 style={{"margin-top":"20px"}}>₹{data.price}</h6>
                            </div>
                        </div>
                    </div>

                    </div>               
                        )}
             </div>
                </div>  
                <div class='col-6'>
                        <div class='row'>
                            <div class='col'></div>
                            <div class='col border' style={{"marginTop":"40px","fontSize":"13px"}}>
                            <h6 style={{"marginTop":"10px","marginBottom":"10px"}}>Toppings added:</h6>
                            <Ingredientscart></Ingredientscart>
                            </div>
                            </div>
                            <div class='row'>
                            <div class='col'></div>
                            <div class='col border' style={{"marginTop":"40px","fontSize":"13px"}}>
                            <h6 style={{"marginTop":"10px","marginBottom":"10px"}}>Cost Details:</h6>
                            <p>Cost of pizza : ₹{pizzascost}</p> 
                            <p>Toppings cost: ₹{toppingprice}</p> 
                            <h4>Total Cost : ₹{CartTotal}</h4> 
                            </div>
                            </div>
                           

<div class='col'></div>
                                       
                    </div>

           


            </div>

</div>
    </div> );
}

export default Cart;