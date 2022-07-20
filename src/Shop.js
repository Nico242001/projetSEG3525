import { useState } from 'react';
import { Link } from 'react-router-dom'

const Shop = () => {
   
    const [sports, setSports] = useState([
        {name:"Soccer", img: "/images/shop/soccerCard.jpg", id:"1"},
        {name:"Basketball", img: "/images/shop/basketball.jpg", id:"2"},
        {name:"Hockey", img: "/images/shop/hockeyCard.jpg", id:"3"}
    ])
   
    return ( 
       <div className="shop bg-light">
         
        <div className="row " min-width="100%">
            <div className="col padding" min-width="50%" max-width="50%">
                <img id="soccer" src="/images/shop/sale.jpg" className="height-image max-width"alt="" min-width="100%" />
            </div>
            <div className="col bg-dark ml-auto d-flex align-items-center mt-md-0 padding " min-width="50%" max-width="50%">
                <div className="container text-center text-white">
                    <h2 className='fit mx-auto'>Shop Big Sales Now!</h2>
                    <Link className="btn btn-secondary" to="/">Shop Now</Link>
                </div>
            </div>
        </div>

        <h2 className="fit mx-auto mt-4">Shop By Sport</h2>

        <div className="row my-4" min-width="100%">
                {sports.map((sport) => (
                <div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={sport.id}>
                    <div className="card card-width bg-dark text-white mx-auto card-static">
                        <img src={sport.img}  className="card-img-top img" alt=""/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{sport.name}</h5>
                            <Link className="btn btn-secondary" to={"/sport/"+sport.name}>Shop</Link>
                        </div>
                    </div>
                </div>))}
    </div>
    </div>
     );
}
 
export default Shop;