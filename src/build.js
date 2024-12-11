import React, { Component } from 'react';
import axios from 'axios';

class Build extends Component {
    constructor(){
        super();
        this.state = {ingredients:[], toppingsInCart:[],
            cost:0};
    }
    componentDidMount=()=>{
        axios.get("http://localhost:4000/ingredientsdata")
            .then((response) => this.setState({
                ingredients: response.data
            })).catch(err => console.log(err))
    }
    state = { 
     } ;
TotalCost=()=>{
    // var check=document.getElementsByClassName('cost');
    // var totalCost=0;
    // for(var a of check){
    //     if(a.checked){
    //         totalCost=totalCost+parseInt(a.value);
    //     }
    // }
    // document.getElementById('price').innerHTML="Total Cost : "+totalCost;
    var toppingsInCartArray=[];
        toppingsInCartArray = JSON.parse(sessionStorage.getItem("toppingsInCart"));
         var toppingsPrice=sessionStorage.getItem("toppingsPrice");
        if(toppingsInCartArray===null)
        toppingsInCartArray=[];
        var check = document.getElementsByClassName('cost');
        var totalprice = 0;
        for(var a of check){
            if(a.checked){
                totalprice = totalprice+parseInt(a.value);
                if(!toppingsInCartArray.includes(a.name))
                toppingsInCartArray.push(a.name);
            }
            else
            {
               if(toppingsInCartArray.includes(a.name)) 
               {
                debugger;
                var index=toppingsInCartArray.indexOf(a.name)
        toppingsInCartArray.splice(index, 1);
                
               }
            }
        }
        this.setState({toppingsInCart:toppingsInCartArray})
        this.setState({cost:totalprice})
        
        document.getElementById('price').innerHTML = "Total Cost : ₹"+totalprice;

     }
     sendTocart=()=>{
        debugger;
        sessionStorage.setItem("toppingsInCart",JSON.stringify(this.state.toppingsInCart));
        sessionStorage.setItem("toppingsPrice",this.state.cost);
}
    render() { 
        return (
        <div>
        <div className='px-5 pt-4 text-center'>
            <p>
                Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing 
                ingredients from the list given below.
            </p>
        </div>
        <div className='px-5 py-2 col-md-8 offset-md-2'>
        <table className="table table-striped table-bordered text-center table-responsive-md align-middle" >
            <tbody>
                {this.state.ingredients.map((data, index) =>
                    <tr key={index}>
                        <td><img src={data.image} alt="pizza" height='72px'></img></td>
                        <td>
                            <b>{data.tname}<span className='ps-2'>₹{data.price}</span></b>
                        </td>
                        <td>
                            <input type="checkbox" name={data.tname} className='cost' value={data.price} onClick={this.TotalCost}/>
                            <label for='addbox'><b className="ps-2" style={{color:'orange'}}>Add</b></label>
                        </td>
                    </tr>
                )}
                
                
            </tbody>
        </table>
        <div className='p-3'>
                        <h4 id="price" style={{color:'darkblue'}}>Total Cost : {this.TotalCost}</h4>
                    </div>
        <div className=''>
                        <center><button type='button' height='20px' style={{color:'orange',backgroundColor:'black',borderColor:'orange',borderRadius:'5px',padding:'5px 25px 5px 25px',fontSize:'20px',marginBottom:'15px'}} onClick={()=>this.sendTocart()}>Build Ur Pizza</button></center>
                    </div>
        </div>
        </div>
        );
    }
}
export default Build;