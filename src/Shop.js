const Shop = () => {
    return ( 
       <div className="shop">
        
<div className="container-fluid pt-4">
    <h2 className="text-center px-4 py-2 mx-auto border border-3 border-dark bg-light"
      >Select the Sport or Category you wish to buy from!</h2>
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