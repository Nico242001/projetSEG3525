import soccer from "./images/shop/soccer.jpg"
import hockey from "./images/shop/hockey.jpg"
import basketball from "./images/shop/basketball.jpg"
import sale from "./images/shop/sale.jpg"
// import {useEffect, useState, useRef} from 'react';

const Shop = () => {
    // const [imgHeight, getHeight] = useState(0);
    // const ref = useRef(null);
    // useEffect(() => {
    //     getHeight(ref.current.clientHeight);


    // })
    return ( 
       <div className="shop">
        <div className="row btm-border" min-width="100%">
        <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 top-border bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                    <h2 className='fit mx-auto'>Shop Soccer Now!</h2>
                    </div>
                </div>
                <div className="col padding" min-width="50%" max-width="50%">
                       <img id="soccer" src={sale} className="max-width"alt="" min-width="100%" />
                </div>
            </div>

            
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
     );
}
 
export default Shop;