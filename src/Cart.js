import { useState } from 'react';
import { Link } from 'react-router-dom'
import StepProgressBar from "custom-react-step-progress-bar";

const Cart = () => {
    const step1Content = <h1>fgfgghgjh</h1>;
    const step2Content = <h1>dgfdg</h1>;
    const step3Content = <h1>dgdfgfdgdfg</h1>;
  
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
      return true;
    }
  
    function step3Validator() {
        return false;
      // return a boolean
    }
    const removeAlert = (e) => {
        document.getElementById("alert").remove();
    }
    let listObj = [];
    let total = 0;
    let empty = true;
    const [refresh, setrefresh] = useState("ref");
    if (sessionStorage.length == 0) {
        sessionStorage.setItem(0, 0);
    } else if (sessionStorage.length == 1) {
        let keys = Object.keys(sessionStorage);
        if (keys == 200) {
            sessionStorage.setItem(0, 0)
        }
    }
    let keys = Object.keys(sessionStorage);
    for (let key of keys) {
        if (key > 0 && key != 200) {
            empty = false;
            let obj = JSON.parse(sessionStorage.getItem(key));
            listObj.push(obj);
            total = total + parseInt(obj.price);
        }
    }
    total = total * 1.13;
    let afterTaxes = parseFloat(total).toFixed(2);
    const remove = (e, key) => {
        sessionStorage.removeItem(key);
        setrefresh(refresh + "ref");
    }

    return (<div className="cart bg-light">
        {(empty) ? (

    <div id="alert" className="alert alert-danger mb-0 card-static">
    <strong>Your cart is empty!</strong>
    <span className='p-1 float-end x' onClick={(e) => { removeAlert(e) }}>X</span>
  </div>


        ): ""}

        {(!empty) ? (
          <StepProgressBar
          startingStep={0}
          previousBtnName="Geri"
          steps={[
            {
              label: "Briefing",
              name: "Briefing",
              content: step1Content
            },
            {
              label: "Image-Acquisition",
              name: "Image-Acquisition",
              content: step2Content
            },
            {
              label: "Image-processing",
              name: "Image Processing",
              content: step3Content
              // validator: step2Validator
            },
            {
              label: "Finish",
              name: "Finish",
              content: step3Content
            }
          ]}
        />
      
        ) : ""}

        <div className="container my-4 p-0 pb-4">
            <div className="container text-center"><h1 className="mx-auto text=center">Cart</h1></div>

    
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
                                <h4 id="totalPrice" className="mx-auto">$ {afterTaxes}</h4>
                            </div>
                            <div className="col-1 text-center">
                                <Link className="btn btn-primary" to="/checkout">CheckOut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}

        </div>
    </div>

    );
}

export default Cart;