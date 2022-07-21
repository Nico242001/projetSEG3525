import { useState, Link } from 'react';
import { Button, Alert } from 'reactstrap';
import './index.css';
sessionStorage.setItem(200, "true");

const Home = () => {
    let showAlert;
    if (sessionStorage.getItem(200) !== null) {
        sessionStorage.setItem(200,"false");
        showAlert = true;
    } else{
        showAlert = false;
    }
    const removeAlert = (e) => {
        document.getElementById("alert").remove();
    }
  const [deals, setDeals] = useState([
        { name: "Super Tracker", oldPrice: "100.00", newPrice: "80.00", sport: "soccer", item: "cleats", img: "/images/index/ccmSuperTracker.jpg", id: "1" },
        { name: "Starlancer", oldPrice: "50.00", newPrice: "30.00", sport: "hockey", item: "sticks", img: "/images/index/starlancer.jpg", id: "2" },
        { name: "item3", oldPrice: "70.00", newPrice: "55.00", sport: "basketball", item: "shirts", img: "/images/index/pheonix.jpg", id: "3" }
    ])
    const clickArg = (name, e) => {
        console.log(name, e);
    }
    return (
        <div className="home bg-light">
              {showAlert ? (
                <div id="alert" className="alert alert-warning mb-0 card-static">
                <strong>We currently can only ship to Canada but are currently working on expanding our shipping!</strong>
                <span className='p-1 float-end x' onClick={(e) => { removeAlert(e) }}>X</span>
              </div>
                ) : ""}
          
            <div className="row" min-width="100%" max-width="100%">
                <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 height-video bottomBorder padding " min-width="50%" max-width="50%">
                    <div className="container text-center text-white">
                        <h2 className='fit mx-auto'>All New Adidas Cleats!!!</h2>
                        <br />
                        <h4 className='fit mx-auto'>The all new Speed of Light Adidas X boots are finally out! Dont wait, get them now before we are all sold out!</h4>
                        <br />
                        <button onClick={(e) => { clickArg("hey", e) }} className="btn btn-secondary mx-auto">Buy Now!</button></div>
                </div>
                <div className="col padding" min-width="50%" max-width="50%">
                    <iframe className='widthFull height-video' src="https://www.youtube.com/embed/VJHEKcKqvOI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <h2 className="fit mx-auto mt-4">ITEMS FOR SALE!</h2>

            <div className="row my-4" min-width="100%">
                {deals.map((deal) => (<div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={deal.id}>

                    <div className="card card-home bg-dark text-white mx-auto">
                        <img src={deal.img} className="card-img-top img" alt="" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{deal.name}</h5>
                            <p className="card-text"><span><s>$ {deal.oldPrice}</s></span> $ {deal.newPrice}</p>
                            <Link to={"/cart/"+deal.id} className="btn btn-secondary ">Buy</Link>
                        </div>
                    </div>

                </div>))}
            </div>
        </div>
    );
}
export default Home;