import { useState } from 'react';

const Cart = () => {
    let listOfkey = [];
    let listObj = [];
    let total = 0;
    const [refresh, setrefresh] = useState("ref");
    if (sessionStorage.length == 0) {
        sessionStorage.setItem(0, 0);
    }
    let keys = Object.keys(sessionStorage);
    for (let key of keys) {
        if (key > 0) {
            // console.log(JSON.parse(sessionStorage.getItem(key)));
            let obj = JSON.parse(sessionStorage.getItem(key));
            listObj.push(obj);
            // listOfkey.push(key);
            // console.log("obj", listObj, "key", listOfkey);
            total = total + parseInt(obj.price);
        }
    }
    total = total * 1.13;
    const remove = (e, key) => {
        sessionStorage.removeItem(key);
        setrefresh(refresh + "ref");
    }

    return (<div className="cart bg-light">
        <div className="container my-4 p-0 pb-4">
            {/* <h2 style="color:#94def2;">help </h2> */}
            <div className="container text-center"><h2 className="mx-auto text=center">CART</h2></div>

            <div className="container border-bottom border-3 border-dark">
                <div className="row mx-auto p-0">
                    <div className="col-2 text-center">
                    </div>
                    <div className="col-2 text-center">
                        <h4 className="mx-auto">Product</h4>
                    </div>
                    <div className="col-1 text-center">
                        <h4 className="mx-auto">Size</h4>
                    </div>
                    <div className="col-2 text-center">
                        <h4 className="mx-auto">Price</h4>
                    </div>
                    <div className="col-2 text-center">
                        <h4 className="mx-auto">Quantity</h4>
                    </div>
                    <div className="col-2 text-center">
                        <h4 className="mx-auto">Total</h4>
                    </div>
                    <div className="col-1 text-center">
                        
                    </div>
                </div>
            </div>

            <div className="container p-0" id="cartItems">
                {
                    listObj.map((element) => (
                        <div className='row align-items-center mt-3 mx-auto border border-3 border-dark bg-light p-0'>
                            <div className='col-2 p-0'><img className="max-img" src={element.image} />
                            </div>
                            <div className='col-2 p-0 text-center'>
                                <h4 className='mx-auto'>{element.name}</h4>
                            </div>
                            <div className='col-1 p-0 text-center'>
                                <h4 className='mx-auto'>{element.size}</h4>
                            </div>
                            <div className='col-2 p-0 text-center'>
                                <h4 className='mx-auto'>$ {element.price}</h4>
                            </div>
                            <div className='col-2 p-0 text-center'>
                                <h4 className='mx-auto'>{element.amount}</h4>
                            </div>
                            <div className='col-2 p-0 text-center'>
                                <h4 className='mx-auto'>$ {parseInt(element.price) * parseInt(element.amount)}.00</h4>
                            </div>
                            <div className='col-1 p-0 text-center'>
                                <button type='button' onClick={(e) => { remove(e, element.key) }} className="btn btn-danger">X</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row mx-auto">
                <div className="col-12">
                    <div className="row mx-auto p-0">
                        <div className="col-7 text-center">
                        </div>
                        <div className="col-2 text-center">
                            <h4 className="mx-auto">Total+tax</h4>
                        </div>
                        <div className="col-2 text-center">
                            <h4 id="totalPrice" className="mx-auto">$ {total}</h4>
                        </div>
                        <div className="col-1 text-center">
                            <button type="button" className="btn btn-primary" >CheckOut</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row mx-auto">
                <div className="col-12">
                    <div className="row mx-auto p-0">
                        <div className="col-9 text-center">
                        </div>

                        <div className="col-2 text-center">
                            <button type="button" >CheckOut</button>
                        </div>
                        <div className="col-1 text-center">
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>

    );
}

export default Cart;