import soccer from "./images/shop/soccer.jpg"
import hockey from "./images/shop/hockey.jpg"
import basketball from "./images/shop/basketball.jpg"
import sale from "./images/shop/sale.jpg"

const Shop = () => {
    return ( 
       <div className="shop">
        <div className="row" min-width="100%">
                <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                        <h2 className='fit mx-auto'>All New Adidas Cleats!!!</h2>
                        <br/>
                        <h4 className='fit mx-auto'>The all new Speed of Light Adidas X boots are finally out! Dont wait, get them now before we are all sold out!</h4>
                        <br/>
                        <button className="btn btn-secondary mx-auto">Buy Now!</button></div>
                </div>
                <div className="col padding" min-width="50%" max-width="50%">
                       <img src={soccer} className="max-width"alt="" min-width="100%" />
                </div>
            </div>
            <div className="row" min-width="100%">
            <div className="col padding" min-width="50%" max-width="50%">
                       <img src={basketball} className="max-width"alt="" min-width="100%" />
                </div>
                <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                        <h2 className='fit mx-auto'>All New Adidas Cleats!!!</h2>
                        <br/>
                        <h4 className='fit mx-auto'>The all new Speed of Light Adidas X boots are finally out! Dont wait, get them now before we are all sold out!</h4>
                        <br/>
                        <button className="btn btn-secondary mx-auto">Buy Now!</button></div>
                </div>
                
            </div>
        


    </div>
     );
}
 
export default Shop;