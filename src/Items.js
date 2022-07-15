import ListItems from './items.json';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Items = () => {
  let sport;
  let name;
  // let itemName;
  let count;
  const {item} = useParams();
  console.log ("item", item);
  let list;
  if (item == "SoccerBalls"){
    name = "Soccer Balls"
    sport = "Soccer";
    list = ListItems.Soccerballs;
  } else if(item === "Cleats"){
    sport = "Soccer";
    name = "Soccer Cleats";
    list = ListItems.cleats
  } else if(item === "ShinGuards"){
    sport = "Soccer";
    name = "Soccer Shin Guards"
    list = ListItems.shinguards
  } else if(item === "Sticks"){
    sport = "Hockey";
    name = "Hockey Sticks"
    list = ListItems.sticks;
  } else if(item === "Skates"){
    sport = "Hockey";
    name= "Hockey Skates";
    list = ListItems.skates;
  } else if(item ==="Helmets"){
    sport = "Hockey";
    name = "Hockey Helmets";
    list = ListItems.helmets;
  } else if(item ==="Basketballs"){
    sport = "Basketball";
    name ="Basketballs"
    list = ListItems.basketballs;
  } else if(item ==="Shoes"){
    sport = "Basketball";
    name ="Basketball Shoes"
    list = ListItems.shoes;
  } else if(item === "Shirts"){
    sport = "Basketball";
    name = "Basketball Shirts"
    list = ListItems.shirts;
  }
  console.log("name",name);
    console.log(list);
    

   
    return ( 
       
       <div className="items">
         <div className="container-fluid pt-4">
            <div className="container border border-3 border-dark bg-light">
              <div>
                <h5><Link to="./">Home</Link> / <Link to="/shop">Shop</Link> / <Link to={"/sport/"+sport}>{sport}</Link> / <Link to={"/items/"+item}>{item}</Link></h5>
              </div>
            <div className="row mx-auto">
              <div className="col p-0">
                 <h2 className="text-left py-2 fit mr-0">{name}</h2> 
             </div>
             <div className="col p-0"> 
                <div className="ml-auto">
                  <h2 class="align-self-end py-2 max-width fit">{count} Items</h2> 
                </div>
              </div>
            </div>
          </div>
        </div>

   
       
{/*
    <div class="container my-4 p-0">
        <div class="row">
            <div class="col-sm-2"> <div id="filterContainer" class="container float-start border border-3 border-dark bg-light mr-4" style="min-width: fit-content;width:100%; height: 400px;">
                <h3>Filter</h3>
            </div></div>
            <div class="col-sm-10">
                <div  class="container" style="width:100%;max-width:100%;">
                    <div id="itemContainer" class="row"> </div>
                </div>
            </div>
        </div>
    </div>
    
</div> */}
       </div>
     );
}
 
export default Items;