import { Link } from 'react-router-dom'
import { useState } from 'react';
const Sales = () => {
    const [deals, setDeals] = useState([
        { name: "Super Tracker", oldPrice: "100.00", newPrice: "80.00", sport: "soccer", item: "cleats", img: "/images/index/ccmSuperTracker.jpg", id: "1" },
        { name: "Starlancer", oldPrice: "50.00", newPrice: "30.00", sport: "hockey", item: "sticks", img: "/images/index/starlancer.jpg", id: "2" },
        { name: "Pheonix", oldPrice: "70.00", newPrice: "55.00", sport: "basketball", item: "shirts", img: "/images/index/pheonix.jpg", id: "3" }
    ])
    return (<div className="sales bg-light">
        <h2 className="fit mx-auto mt-5">ITEMS FOR SALE!</h2>

        <div className="row my-4" min-width="100%">
            {deals.map((deal) => (<div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={deal.id}>

                <div className="card card-home bg-dark text-white mx-auto">
                    <img src={deal.img} className="card-img-top img" alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{deal.name}</h5>
                        <p className="card-text"><span><s>$ {deal.oldPrice}</s></span> $ {deal.newPrice}</p>
                        <Link to={"/item/"+deal.id} className="btn btn-secondary ">Buy</Link>
                    </div>
                </div>

            </div>))}
        </div>
    </div>);
}

export default Sales;