import { useState } from 'react';
import { Link } from 'react-router-dom'

const Cart = () => {
    let listObj = [];
    let total = 0;
    let empty = true;
    const [refresh, setrefresh] = useState("ref");
    if (sessionStorage.length == 0) {
        sessionStorage.setItem(0, 0);
    }
    let keys = Object.keys(sessionStorage);
    for (let key of keys) {
        if (key > 0) {
            empty = false;
            let obj = JSON.parse(sessionStorage.getItem(key));
            listObj.push(obj);
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
            <div className="container text-center"><h2 className="mx-auto text=center">Cart</h2></div>

            {(!empty) ? (
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
                ) : ""}
           

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
            {(!empty) ? (
                 <div className="row mx-auto mt-3">
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
                             <Link className="btn btn-primary" to="/">CheckOut</Link>
                         </div>
                     </div>
                 </div>
             </div>
                ) : ""}

            {(empty) ? (
                <h2>Your cart is empty</h2>
                ) : ""}
           
        </div>
    </div>

    );
}

export default Cart;