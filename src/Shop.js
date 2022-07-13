import soccer from "./images/shop/soccer.jpg"
import hockey from "./images/shop/hockey.jpg"
import basketball from "./images/shop/basketball.jpg"
import soccerCard from "./images/shop/soccerCard.jpg"
import hockeyCard from "./images/shop/hockeyCard.jpg"
// import basketballCard from "./images/shop/basketballCard.jpg"
import sale from "./images/shop/sale.jpg"
import { useState } from 'react';
// import {useEffect, useState, useRef} from 'react';

const Shop = () => {
    const [sports, setSports] = useState([
        {name:"Soccer", img: soccerCard, id:"1"},
        {name:"Basketball", img: hockeyCard, id:"2"},
        {name:"Hockey", img: hockeyCard, id:"3"}
    ])
   
    return ( 
       <div className="shop">
        <div className="row " min-width="100%">
            <div className="col padding" min-width="50%" max-width="50%">
                <img id="soccer" src={sale} className="height-image max-width"alt="" min-width="100%" />
            </div>
            <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 top-border padding " min-width="50%" max-width="50%">
                <div className="container text-center text-white">
                    <h2 className='fit mx-auto'>Shop Big Sales Now!</h2>
                </div>
            </div>
        </div>

        <h2 className="fit mx-auto mt-4">Shop By Sport</h2>

        <div className="row my-4" min-width="100%">
                {sports.map((sport) => (
                <div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12' key={sport.id}>
                    <div className="card card-width bg-dark text-white mx-auto">
                        <img src={sport.img}  className="card-img-top img" alt=""/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{sport.name}</h5>
                            <Link className="btn btn-secondary" to={"/"+sport.name}>Shop</Link>
                            {/* <a href="#" className="btn btn-secondary">Buy</a> */}
                        </div>
                    </div>
                </div>))}


            {/* <div className="row btm-border" min-width="100%">
            <div className="col padding" min-width="50%" max-width="50%">
                       <img id="basketball" src={basketball} className="max-width"alt="" min-width="100%" />
                </div>
                <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                    <h2 className='fit mx-auto'>Shop BasketBall Now!</h2>
                    </div>
                </div>
                
            </div>
            <div className="row btm-border" min-width="100%">
            <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                    <h2 className='fit mx-auto'>Shop Hockey Now!</h2>
                    </div>
                </div>
                <div className="col padding" min-width="50%" max-width="50%">
                       <img id="hockey"  src={hockey} className="max-width"alt="" min-width="100%" />
                </div>
            </div> */}


    </div>
    </div>
     );
}
 
export default Shop;