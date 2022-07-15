// import {ListItems} from './items.json'
import React, { useState } from 'react';

const Items = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('items.json').then(function(response){
      console.log(response)
    })
  }

  // console.log(ListItems.soccer.balls)

   
    return ( 
       
       <div className="items">
        {/* <h1>{list[1].name}</h1> */}
       </div>
     );
}
 
export default Items;