import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Sport = () => {
    
    let name;
    let items = [];
    const {sport} = useParams();
    if(sport === "Hockey"){
        items = [{id:"1", name:"Sticks", param:"Sticks", img:"/images/sport/stick.jpg"}, {id:"2", name:"Skates", param:"Skates", img:"/images/sport/skates.jpg"}, {id:"3", name:"Helmets", param:"Helmets", img:"/images/sport/helmet.jpg"}]
        name ="Hockey"
    } else if(sport === "Soccer"){
        items = [{id:"1", name:"Soccer Balls", param:"SoccerBalls", img:"/images/sport/soccerball.jpg"}, {id:"2", name:"Cleats", param:"Cleats", img:"/images/sport/cleats.jpg"}, {id:"3", name:"Shin Guards", param:"ShinGuards", img:"/images/sport/shinguards.jpg"}]
        name ="Soccer"
    }else{
        items = [{id:"1", name:"Basketballs", param:"Basketballs", img:"/images/sport/basketball.jpg"}, {id:"2", name:"Shoes", param:"Shoes", img:"/images/sport/shoes.jpg"}, {id:"3", name:"Shirts", param:"Shirts", img:"/images/sport/shirt.jpg"}]
        name = "Basketball"
    }

    return ( 
      
        <div className="sport bg-light">
          
            
            <h1 className="fit mx-auto my-3">Select the {name} equipement you wish to buy!</h1><div className="row my-4 " min-width="100%">
            {items.map((item) => (
                <div className='p-2 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12' key={item.id}>
                    <div className="card card-width bg-dark text-white mx-auto card-static sport-card-height">
                        <img src={item.img} className="card-img-top sport-img-height" alt="" />
                        <div className="card-body text-center ">
                            <h5 className="card-title ">{item.name}</h5>
                            <Link className="btn btn-secondary " to={"/items/" + item.param}>Shop</Link>
                        </div>
                    </div>
                </div>))}
        </div></div>
       

    );

}
 
export default Sport;