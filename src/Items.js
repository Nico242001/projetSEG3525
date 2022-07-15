import ListItems from './items.json'
import React, { useState } from 'react';

const Items = () => {
  
    console.log(ListItems.soccer);

   
    return ( 
       
       <div className="items">
         <div className="container-fluid pt-4">
            <div className="container border border-3 border-dark bg-light">
              <div>
                <h5><a>Home</a> / <a href="">Shop</a> / <a href="">Sport</a> / <a href="">equipement</a></h5>
              </div>
            <div className="row mx-auto">
              <div className="col p-0">
                 <h2 className="text-left py-2 max-width fit">Sport equipement</h2> 
             </div>
             <div className="col p-0"> 
                <div className="ml-auto">
                  <h2 id="sportNameEquipement" class="align-self-end py-2 max-width fit">Sport equipement</h2> 
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