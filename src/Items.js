import ListItems from './items.json';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
// import json from "./images/soccer/balls/brazuca.jpg"

let sport;
let name;
let itemName;
let brand;
let size;
let list;
let saleList = [];
let listFinal = [];
let saleFinal = [];
let brandBoolean = true;
function soccer() {
  brand = ["Adidas", "Nike", "Puma"];
  sport = "Soccer";
}
function hockey() {
  brand = ["Bauer", "CCM", "Warrior"];
  sport = "Hockey";
}
function onLoad(item) {
  saleList = [];
  if (item === "SoccerBalls") {
    soccer();
    itemName = "Balls";
    name = "Soccer Balls"
    size = ["1", "2", "3", "4", "5"];
    list = ListItems.Soccerballs;
    ListItems.sale.forEach(element => {
      if (element.item === "SoccerBalls") {
        saleList.push(element);
      }
    })
  } else if (item === "Cleats") {
    soccer();
    itemName = "Cleats";
    name = "Soccer Cleats";
    size = ["6", "7", "8", "9", "10", "11", "12"];
    list = ListItems.cleats;
  } else if (item === "ShinGuards") {
    soccer();
    itemName = "Shin Guards";
    size = ["Small", "Medium", "Large"];
    name = "Soccer Shin Guards";
    list = ListItems.shinguards;
  } else if (item === "Sticks") {
    hockey();
    name = "Hockey Sticks";
    size = ["Small", "Medium", "Large"];
    itemName = "Sticks";
    list = ListItems.sticks;
  } else if (item === "Skates") {
    hockey();
    itemName = "Skates";
    size = ["6", "7", "8", "9", "10", "11", "12"];
    name = "Hockey Skates";
    list = ListItems.skates;
    ListItems.sale.forEach(element => {
      if (element.item === "Skates") {
        saleList.push(element);
      }
    })
    console.log("push", saleList);
  } else if (item === "Helmets") {
    hockey();
    size = ["Small", "Medium", "Large"];
    itemName = "Helmets";
    name = "Hockey Helmets";
    list = ListItems.helmets;
  } else if (item === "Basketballs") {
    brand = ["Nike", "Spalding", "Wilson"];
    size = ["27.5", "28.5", "29.5"];
    itemName = "Balls";
    sport = "Basketball";
    name = "Basketballs";
    list = ListItems.basketballs;
  } else if (item === "Shoes") {
    brand = ["Adidas", "Nike", "Puma"];
    size = ["6", "7", "8", "9", "10", "11", "12"];
    itemName = "Shoes";
    sport = "Basketball";
    name = "Basketball Shoes";
    list = ListItems.shoes;
  } else if (item === "Shirts") {
    size = ["Small", "Medium", "Large"];
    itemName = "Shirts";
    sport = "Basketball";
    name = "Basketball Shirts";
    list = ListItems.shirts;
    brandBoolean = false;
  }
  console.log("sale on", saleList);
}

const Items = () => {
  const { item } = useParams();
  const [paramHistory, setParamHistory] = useState(item);
  onLoad(item);
  const [finalList, setFinalList] = useState(list);
  const [finalSaleList, setFinalSaleList] = useState(saleList);
  const [clicked, setclicked] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);


  const checkClicked = (e, brand) => {
    const newclick = clicked + 1;
    setclicked(newclick);
  }

  useEffect(() => {

    if (paramHistory != item) {
      var elements = document.getElementsByClassName("checkbox-reset");
      for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].checked = false;
        saleList = [];
      }
      setParamHistory(item);
    }
    console.log("item", item);
    onLoad(item);
    console.log("list", list);
    console.log("sale", saleList)
    let brandChecked = [];
    let sizeChecked = [];
    if (brandBoolean) {
      for (let i = 0; i < brand.length; i++) {
        if (document.getElementById(brand[i]).checked) {
          brandChecked.push(brand[i]);
        }
      }
    }
    for (let i = 0; i < size.length; i++) {
      if (document.getElementById(size[i]).checked) {
        sizeChecked.push(size[i]);
      }
    }
    if ((sizes.length !== sizeChecked.length && (sizes.every((val) => sizeChecked.includes(val))))) {
      setSizes(sizeChecked);
    }
    if ((brands.length !== brandChecked.length && (brands.every((val) => brandChecked.includes(val))))) {
      setBrands(brandChecked);
    }
    let saleCards = [];
    let listCards = [];
    if (sizeChecked.length > 0) {
      saleList.forEach(element => {
        let bool = false
        sizeChecked.forEach(elemSize => {
          if (element.size.includes(elemSize) && !bool) {
            saleCards.push(element);
            bool = true;
          }
        })
      });
    } else {
      saleCards = saleList;
    }
    if (sizeChecked.length > 0) {
      list.forEach(element => {
        let bool = false
        sizeChecked.forEach(elemSize => {
          if (element.size.includes(elemSize) && !bool) {
            listCards.push(element);
            bool = true;
          }
        })
      });
    } else {
      listCards = list;
    }
    listFinal = [];
    saleFinal = [];
    if (brandChecked.length > 0) {
      listCards.forEach(element => {
        if (brandChecked.includes(element.brand)) {
          listFinal.push(element);
        }
      });
    } else {
      listFinal = listCards;
    }
    if (brandChecked.length > 0) {
      saleCards.forEach(element => {
        if (brandChecked.includes(element.brand)) {
          saleFinal.push(element);
        }
      });
    } else {
      saleFinal = saleCards;
    }
    if (finalList.length != (listFinal.length)) {
      setFinalList(listFinal);
    }
    // else{
    //   for(let i = 0; i<finalList.length; i++){
    //     if(!(finalList.some(e => e.name === listFinal[i].name))){
    //       setFinalList(listFinal);
    //     }
    //   }
    // }
    if (finalSaleList.length != (saleFinal.length)) {
      setFinalSaleList(saleFinal);
    }
    else {
      for (let i = 0; i < finalSaleList.length; i++) {
        console.log(finalSaleList.length, finalSaleList);
        console.log(saleFinal.length, saleFinal);
        let bool = true;
        for (let n = 0; n < saleFinal.length; n++) {
          console.log(saleFinal[n].name, finalSaleList[n].name)
          if (saleFinal[n].name == finalSaleList[i].name) {
            bool = false;
            console.log("in");
          }
        }
        if (bool) {
          setFinalSaleList(saleFinal);
        }

      }
    }
    console.log("final", finalSaleList, saleList);

  })

  return (

    <div className="items bg-light">
      <div className="container-fluid pt-4">
        <div className="container border border-3 border-dark bg-light">
          <div>
            <h5><Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <Link to={"/sport/" + sport}>{sport}</Link> / <Link to={"/items/" + item}>{itemName}</Link></h5>
          </div>
          <div className="row mx-auto">
            <div className="col p-0">
              <h2 className="text-left py-2 fit mr-0">{name}</h2>
            </div>
            <div className="col p-0">
              <div className="ml-auto">
                <h2 class="align-self-end py-2 max-width fit">{finalSaleList.length + finalList.length} Items</h2>
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
              {brandBoolean ? (<h4>Brand</h4>) : ""}
              {brandBoolean ? (
                brand.map((brandName) => (
                  <><div><input className='checkbox-reset' type="checkbox" onClick={(e) => { checkClicked(e, { brandName }) }} id={brandName} value={brandName}></input>
                    <label for={brandName}> {brandName}</label></div></>
                ))) : ""}
              <h4>Size</h4>
              {size.map((itemSize) => (
                <><div><input className='checkbox-reset' type="checkbox" onClick={(e) => { checkClicked(e, { itemSize }) }} id={itemSize} value={itemSize}></input>
                  <label for={itemSize}> {itemSize}</label></div></>
              ))}
            </div>
          </div>
          </div>
          <div className="col-sm-10">
            <div className="row max-width">
              {finalList.map((element) => (<div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12' key={element.id}>

                <div className="card card-home bg-dark text-white mx-auto card-static">
                 <img src={element.image} className="card-img-top img" alt="" />
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">$ {element.price}</p>
                    <a href="#" className="btn btn-secondary">Buy</a>
                  </div>
                </div>

              </div>))}
              {finalSaleList.map((element) => (<div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={element.id}>

                <div className="card card-home bg-dark text-white mx-auto sport-card-height">
                  <img src={element.image} className="card-img-top img" alt="" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text"><span>$ {element.oldPrice}</span> $ {element.price}</p>
                    <a href="#" className="btn btn-secondary">Buy</a>
                  </div>
                </div>

              </div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;