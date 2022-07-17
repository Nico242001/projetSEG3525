import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ListItems from './items.json';
let sport;
let item;
let obj;
let idInt;
function findObject(idInt, list){
    for(let i=0;i<list.length;i++){
        if(id == list[i].id){
            return list[i]
        }
    }
}
const Item = () => {
    const { id } = useParams();
    idInt = parseInt(id);
    if (3 < idInt <= 33) {
        sport = "Soccer";
        if (3 < idInt <= 13) {
            item = "Balls";
            let list = ListItems.Soccerballs;
            obj = findObject(id, list);

        } else if (13 < idInt <= 23) {
            item = "Cleats";
            let list = ListItems.cleats;
        } else {
            item = "Shin Guards";
            let list = ListItems.shinguards;
        }
    }
    else if (33 < idInt <= 63) {
        sport = "Hockey"
        if (33 < idInt <= 43) {
            item = "Sticks";
            let list = ListItems.sticks;

        } else if (43 < idInt <= 53) {
            item = "Skates";
            let list = ListItems.skates;
        } else {
            item = "Helmets";
            let list = ListItems.helmetss;
        }
    } else if (63 < idInt <= 93) {
        sport = "Basketball"
        if (63 < idInt <= 73) {
            item = "Balls";
            let list = ListItems.basketballs;

        } else if (73 < idInt <= 83) {
            item = "Shoes";
            let list = ListItems.shoes;
        } else {
            item = "Shirts";
            let list = ListItems.shirts;
        }
    }
    console.log("sport", sport, "item", item, "obj", obj);

    return (
        <div className="item bg-light">

            <div className="container-fluid pt-4">

                <div className="container border border-3 border-dark bg-light">
                    <div>
                        <h5><Link to="./">Home</Link> / <Link to="./"></Link> / <Link to="./"></Link> / <Link to="./"></Link> / <Link to="./"></Link></h5>
                    </div>
                    <div className="row mx-auto">
                        <div className="col p-0">
                            <h2 id="itemNameHeader" className="text-left py-2 fit max-width">Item</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container m-4 p-0">
        <div id="itemDescription" className="container float-start text-center border border-3 border-dark bg-light" style="max-width:60%;">
            <img id="image" src="soccer.jpg" width="35%"/>
            <br/>
            <h3>Description</h3>
            <p></p>
        </div>
        <div id="details" className="container float-end border border-3 border-dark bg-light" style="min-width: fit-content;max-width:35%;">
            <div class="container text-center border-bottom border-3 border-dark">
                <h3 >Total: $<span id="price">price</span></h3>
            </div>

         
            <div class="container mt-3">
                <h4 style="margin-left:25px;">Size</h4>
                <select name="itemSize" id="itemSize" style="width:85px; margin-left:25px;"></select>
                <br/>
                <br/>
                <h4 style="margin-left:25px;">Quantity</h4>
                <select name="itemAmount" id="itemAmount" style="width:85px; margin-left:25px;">
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
                <button type="button" onclick="addToCart()" style="margin-left:25px;">Add to Cart</button>
                <br/>
                <br/>
            </div>
        </div>
    </div> */}
        </div>
    );
}

export default Item;