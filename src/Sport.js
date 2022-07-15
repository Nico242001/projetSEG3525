import { useParams } from "react-router-dom";
import stick from "./images/sport/stick.jpg"
import skate from "./images/sport/skate.jpg"
import helmet from "./images/sport/helmet.jpg"
import soccerball from "./images/sport/soccerball.jpg"
import cleats from "./images/sport/cleats.jpg"
import shinguards from "./images/sport/shinguards.jpg"
import basketball from "./images/sport/basketball.jpg"
import shoe from "./images/sport/shoes.jpg"
import shirt from "./images/sport/shirt.jpg"
import { Link } from 'react-router-dom'

const Sport = () => {
    let name;
    let items = [];
    const {sport} = useParams();
    if(sport === "Hockey"){
        items = [{id:"1", name:"Sticks", param:"Sticks", img:stick}, {id:"2", name:"Skates", param:"Skates", img:skate}, {id:"3", name:"Helmets", param:"Helmets", img:helmet}]
        name ="Hockey"
    } else if(sport === "Soccer"){
        items = [{id:"1", name:"Soccer Balls", param:"SoccerBalls", img:soccerball}, {id:"2", name:"Cleats", param:"Cleats", img:cleats}, {id:"3", name:"Shin Guards", param:"ShinGuards", img:shinguards}]
        name ="Soccer"
    }else{
        items = [{id:"1", name:"Basketballs", param:"Basketballs", img:basketball}, {id:"2", name:"Shoes", param:"Shoes", img:shoe}, {id:"3", name:"Shirts", param:"Shirts", img:shirt}]
        name = "Basketball"
    }

    return ( 
      
        <><h1 className="fit mx-auto my-3">Select the {name} equipement you wish to buy!</h1><div className="row my-4 " min-width="100%">
            {items.map((item) => (
                <div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={item.id}>
                    <div className="card card-width bg-dark text-white mx-auto card-static">
                        <img src={item.img} className="card-img-top img " alt="" />
                        <div className="card-body text-center ">
                            <h5 className="card-title ">{item.name}</h5>
                            <Link className="btn btn-secondary " to={"/items/" + item.param}>Shop</Link>
                        </div>
                    </div>
                </div>))}
        </div></>
       

    );

}
 
export default Sport;