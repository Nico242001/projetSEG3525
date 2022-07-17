const Item = () => {
    return ( 

        <div className="container-fluid pt-4">
    <div className="container border border-3 border-dark bg-light">
        <div>
            <h5><a href="https://nico242001.github.io/projet2/index">Home</a> / <a href="https://nico242001.github.io/projet2/shop">Shop</a> / <a id="sportLink" href="">Sport</a> / <a id="equipementLink"href="">equipement</a><span id="space"> / </span><a id="itemLink"href="">itemName</a></h5>
        </div>
        <div className="row mx-auto">
            <div className="col p-0">
                <h2 id="itemNameHeader" className="text-left py-2"
                style="max-width: fit-content;">Item</h2>
            </div>
        </div>
    </div>
    <div className="container my-4 p-0">
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
    </div>
</div>

     );
}
 
export default Item;