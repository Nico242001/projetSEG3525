import ListItems from './items.json';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

let sport;
let name;
let itemName;
let count;
let brand;
let size;
let list;
let brandBoolean =true;
function soccer(){
  brand = ["Adidas", "Nike", "Puma"];
  sport = "Soccer";
}
function hockey(){
  brand = ["Bauer", "CCM","Warrior"];
  sport = "Hockey";
}
function onLoad(item){
  console.log(item);
  if (item === "SoccerBalls"){
    soccer();
    itemName = "Balls";
    name = "Soccer Balls"
    size=["1", "2", "3", "4", "5"];
    list = ListItems.Soccerballs;
  } else if(item === "Cleats"){
    soccer();
    itemName = "Cleats";
    name = "Soccer Cleats";
    size=["6", "7", "8", "9", "10", "11", "12"];
    list = ListItems.cleats;
  } else if(item === "ShinGuards"){
    soccer();
    itemName = "Shin Guards";
    size=["Small", "Medium", "Large"];
    name = "Soccer Shin Guards";
    list = ListItems.shinguards;
  } else if(item === "Sticks"){
    hockey();
    name = "Hockey Sticks";
    size=["Small", "Medium", "Large"];
    itemName = "Sticks";
    list = ListItems.sticks;
  } else if(item === "Skates"){
    hockey();
    itemName = "Skates";
    size=["6", "7", "8", "9", "10", "11", "12"];
    name= "Hockey Skates";
    list = ListItems.skates;
  } else if(item ==="Helmets"){
    hockey();
    size=["Small", "Medium", "Large"];
    itemName = "Helmets";
    name = "Hockey Helmets";
    list = ListItems.helmets;
  } else if(item ==="Basketballs"){
    brand = ["Nike", "Spalding", "Wilson"];
    size=["27.5", "28.5", "29.5"];
    itemName = "Balls";
    sport = "Basketball";
    name ="Basketballs";
    list = ListItems.basketballs;
  } else if(item ==="Shoes"){
    brand = ["Adidas", "Nike", "Puma"];
    size=["6", "7", "8", "9", "10", "11", "12"];
    itemName = "Shoes";
    sport = "Basketball";
    name ="Basketball Shoes";
    list = ListItems.shoes;
  } else if(item === "Shirts"){
    size=["Small", "Medium", "Large"];
    itemName = "Shirts";
    sport = "Basketball";
    name = "Basketball Shirts";
    list = ListItems.shirts;
    brandBoolean = false;
  }
}


const Items = () => {
  const {item} = useParams(); 
  onLoad(item); 
  const [clicked, setclicked] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const checkClicked = (e, brand) =>{
    const newclick = clicked+1;
    setclicked(newclick);
}
  useEffect(()=>{
    onLoad(item);
    let brandChecked = [];
    let sizeChecked = [];
    if(brandBoolean){
      for(let i = 0; i<brand.length; i++){
        if(document.getElementById(brand[i]).checked){
          brandChecked.push(brand[i]);
        }
      }
    }
    for(let i = 0; i<size.length;i++){
      if(document.getElementById(size[i]).checked){
        sizeChecked.push(size[i]);
      }
    }
    if((sizes.length !== sizeChecked.length && (sizes.every((val) => sizeChecked.includes(val))))){
      setSizes(sizeChecked);
    }
    if((brands.length !== brandChecked.length && (brands.every((val) => brandChecked.includes(val))))){
      setBrands(brandChecked);
    }
    console.log(sizeChecked);
    console.log(brandChecked);
    console.log(list);
    let listCards= [];
    if(sizeChecked.length>0){
      list.forEach(element => {
        sizeChecked.every(elemSize =>{
          if(element.size.includes(elemSize)){
            listCards.push(element);
          }
        })
      });
    } else{
      listCards = list;
    }
    console.log(listCards);
    let listFinal=[];    
    if(brandChecked.length>0){
      listCards.forEach(element => {
        if(brandChecked.includes(element.brand)){
          console.log(element.brand);
          listFinal.push(element);
        }
      });
    } else{
      listFinal = listCards;
    }
    console.log(listFinal);
  })
   
    return ( 
       
       <div className="items">
         <div className="container-fluid pt-4">
            <div className="container border border-3 border-dark bg-light">
              <div>
                <h5><Link to="./">Home</Link> / <Link to="/shop">Shop</Link> / <Link to={"/sport/"+sport}>{sport}</Link> / <Link to={"/items/"+item}>{itemName}</Link></h5>
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
    <div className="container my-4 p-0">
        <div className="row">
            <div className="col-sm-2"> <div id="filterContainer" className="container float-start border border-3 border-dark bg-light mr-4 max-width fit">
                <h3>Filter</h3>
                <div id="itemContainer" className="row">
                  {brandBoolean ? ( <h4>Brand</h4>):""}
                  {brandBoolean ? ( 
                    brand.map((brandName) => (
                    <><div><input type="checkbox" onClick={(e) =>{checkClicked(e, {brandName})}} id={brandName} value={brandName}></input>
                    <label for={brandName}> {brandName}</label></div></>
                    ) )):""}
                    <h4>Size</h4>
                    {size.map((itemSize) => (
                      <><div><input type="checkbox"  onClick={(e) =>{checkClicked(e, {itemSize})}} id={itemSize} value={itemSize}></input>
                      <label for={itemSize}> {itemSize}</label></div></>
               ))}
                </div>
              </div>
            </div>
            <div className="col-sm-10">
                <div  className="container max-width">
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Items;