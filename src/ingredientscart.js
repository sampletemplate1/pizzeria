import React, { useEffect } from 'react';
import {useState} from 'react';

function Ingredientscart() {
    const [toppings,setToppings]=useState(JSON.parse(sessionStorage.getItem("toppingsInCart")));
    const [toppingprice,setToppingPrice] = useState(JSON.parse(sessionStorage.getItem("toppingsPrice")));

    
    useEffect(()=>{
        debugger;
        var items=JSON.parse(sessionStorage.getItem("itemsInCart"))
        var total=0;
        for(var i=0;i<items.length;i++)
        {
            total=total+items[i].price;
        }
      //  sessionStorage.setItem("pizzaCost",total);
        total=total+toppingprice;
        sessionStorage.setItem("totalPrice",total);
    },[])


    return (
    <div>
        <div class='container' >
                <div class='row '>
                {toppings?.map((data,id)=>
                <div>
                <div class='col-6'>
                     {/* <div class='row'>
                        <div class='col'>            
                            <b>{data}</b>
                        </div>
                    </div>  */}
                </div>
                <div class='col-6'>       
                    <div class='row'>
                        <div class='col'>            
                                <p style={{"width":"100px"}}>{data}</p>
                            </div>
                        </div>         
                    </div>
                </div>               
                )}
                
                </div>  
         </div>



    </div> 
    );
}

export default Ingredientscart;