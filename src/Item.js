import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ListItems from './items.json';
let sport;
let item;
let obj;
let idInt;
let itemLink;
let list = [];
function findObject(id){
    console.log("in", id, list);
    for(let i=0;i<list.length;i++){
        console.log(list[i].id);
        if(id == list[i].id){
            console.log(list[i])
            return list[i]
        }
    }
    console.log("not");
}
const Item = () => {
    const { id } = useParams();
    console.log("id", id);
    idInt = parseInt(id);
    if (3 < idInt && idInt <= 33) {
        sport = "Soccer";
        if (3 < idInt && idInt <= 13) {
            item = "Balls";
            itemLink = "SoccerBalls"
            list = ListItems.Soccerballs;
            obj = findObject(id);

        } else if (13 < idInt && idInt <= 23) {
            item = "Cleats";
            itemLink = "Cleats";
            list = ListItems.cleats;
            obj = findObject(id);
        } else {
            item = "Shin Guards";
            itemLink = "Shin Guards";
            list = ListItems.shinguards;
            obj = findObject(id);
        }
    }
    else if (33 < idInt && idInt <= 63) {
        sport = "Hockey"
        if (33 < idInt && idInt <= 43) {
            item = "Sticks";
            itemLink = "Sticks";
            list = ListItems.sticks;
            obj = findObject(id);

        } else if (43 < idInt && idInt <= 53) {
            item = "Skates";
            itemLink = "Skates";
            list = ListItems.skates;
            obj = findObject(id);
        } else {
            item = "Helmets";
            itemLink = "Helmets";
            list = ListItems.helmetss;
            obj = findObject(id);
        }
    } else if (63 < idInt && idInt <= 93) {
        sport = "Basketball"
        if (63 < idInt && idInt <= 73) {
            item = "Balls";
            itemLink = "Basketballs";
            list = ListItems.basketballs;
            obj = findObject(id);

        } else if (73 < idInt && idInt <= 83) {
            item = "Shoes";
            itemLink = "Shoes";
            list = ListItems.shoes;
            obj = findObject(id);
        } else {
            item = "Shirts";
            itemLink = "Shirts";
            list = ListItems.shirts;
            obj = findObject(id);
        }
    }

    return (
        <div className="item bg-light">

            <div className="container-fluid pt-4">

                <div className="container border border-3 border-dark bg-light">
                    <div>
                        <h5><Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <Link to={"/sport/"+sport}>{sport}</Link> / <Link to={"/items/"+itemLink}>{item}</Link> / <Link to={"/item/"+obj.id}>{obj.name}</Link></h5>
                    </div>
                    <div className="row mx-auto">
                        <div className="col p-0">
                            <h2 className="text-left py-2 fit max-width">{obj.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-4 p-0">
        <div id="itemDescription" className="container float-start text-center border border-3 border-dark bg-light" max-width="60%">
            <img id="image" src={obj.image} width="35%"/>
            <br/>
            <h3>Description</h3>
            <p>{obj.description}</p>
        </div>
        <div id="details" className="container float-end border border-3 border-dark bg-light fit" max-width="35%">
            <div class="container text-center border-bottom border-3 border-dark">
                <h3 >Total: $<span id="price">{obj.price}</span></h3>
            </div>

         
            <div class="container mt-3">
                <h4 style="margin-left:25px;">Size</h4>
                <select name="itemSize" id="itemSize" width="85px" margin-left="25px"></select>
                <br/>
                <br/>
                <h4 style="margin-left:25px;">Quantity</h4>
                <select name="itemAmount" id="itemAmount" width="85px" margin-left="25px">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <br/>
                <br/>
                <button type="button"  margin-left="25px">Add to Cart</button>
                <br/>
                <br/>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Item;