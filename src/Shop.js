import soccer from "./images/shop/soccer.jpg"
import hockey from "./images/shop/hockey.jpg"
import basketball from "./images/shop/basketball.png"
import sale from "./images/shop/sale.jpg"

const Shop = () => {
    return ( 
       <div className="shop">
        <div className="row" min-width="100%">
                <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 height bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                        <h2 className='fit mx-auto'>All New Adidas Cleats!!!</h2>
                        <br/>
                        <h4 className='fit mx-auto'>The all new Speed of Light Adidas X boots are finally out! Dont wait, get them now before we are all sold out!</h4>
                        <br/>
                        <button onClick={(e) =>{clickArg("hey", e)}} className="btn btn-secondary mx-auto">Buy Now!</button></div>
                </div>
                <div className="col padding" min-width="50%" max-width="50%">
                       <img src={soccer} alt="" min-width="100%" />
                </div>
            </div>
        
<div className="container text-center mt-3">

    <div className="row mx-auto">
        <div className="col mx-auto p-4" >
            <div className="card mx-auto border border-3 border-dark" >
                <div className="card-body">
                    {/* <img src="soccer.jpg" class="card-img-top" style="width:110px" > */}
                    <h5 className="card-title my-0">Soccer</h5>
                </div>
                <a href="https://nico242001.github.io/projet2/soccer" className="btn btn-secondary btn-lg active p-1 mx-auto mb-2" role="button" aria-pressed="true">Select</a>
            </div>
        </div>

        <div className="col mx-auto p-4" >
            <div className="card mx-auto border border-3 border-dark" >
                <div className="card-body">
                    {/* <img src="hockey.jpg" class="card-img-top" style="width:100px" > */}
                    <h5 className="card-title my-0">Hockey</h5>
                </div>
                <a href="https://nico242001.github.io/projet2/hockey" className="btn btn-secondary btn-lg active p-1 mx-auto mb-2" role="button" aria-pressed="true">Select</a>
            </div>
        </div>
    </div>
  
    <div className="row mx-auto">
        <div className="col mx-auto p-4">
            <div className="card mx-auto border border-3 border-dark">
                <div className="card-body">
                    {/* <img src="basketball.png" class="card-img-top" style="width:110px" > */}
                    <h5 className="card-title my-0">BasketBall</h5>
                </div>
                <a href="https://nico242001.github.io/projet2/basket" className="btn btn-secondary btn-lg active p-1 mx-auto mb-2" role="button" aria-pressed="true">Select</a>
              </div>
        </div>

        <div className="col mx-auto p-4">
            <div className="card mx-auto border border-3 border-dark">
                <div className="card-body">
                    {/* <img src="sale.jpg" class="card-img-top" style="width:110px" > */}
                    <h5 className="card-title my-0">DEALS</h5>
                </div>
                <a href="https://nico242001.github.io/projet2/deals" className="btn btn-secondary btn-lg active p-1 mx-auto mb-2" role="button" aria-pressed="true">Select</a>
            </div>
        </div>
    </div>
</div>
    </div>
     );
}
 
export default Shop;