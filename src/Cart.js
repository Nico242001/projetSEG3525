

const Cart = () => {
    if (sessionStorage.length == 0) {
        sessionStorage.setItem(0, 0);
    }
    
    return (<div className="cart bg-light">
        <div className="container my-4 p-0 pb-4">
            {/* <h2 style="color:#94def2;">help </h2> */}
            <h2 >help </h2>
            <div className="container border border-3 border-dark bg-light">
                <div className="row mx-auto">
                    <div className="col-12 text-center">
                        <h2 className="mx-auto">CART</h2>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-12">
                        <div className="row mx-auto p-0">
                            <div className="col-2 text-center">
                                <h4 className="mx-auto">Image</h4>
                            </div>
                            <div className="col-2 text-center">
                                <h4 className="mx-auto">Product</h4>
                            </div>
                            <div className="col-2 text-center">
                                <h4 className="mx-auto">Size</h4>
                            </div>
                            <div className="col-2 text-center">
                                <h4 className="mx-auto">Price</h4>
                            </div>
                            <div className="col-1 text-center">
                                <h4 className="mx-auto">Quantity</h4>
                            </div>
                            <div className="col-2 text-center">
                                <h4 className="mx-auto">Total</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id="cartItems">

            </div>
            <div className="row mx-auto">
                <div className="col-12">
                    <div className="row mx-auto p-0">
                        <div className="col-8 text-center">
                        </div>
                        <div className="col-1 text-center">
                            <h4 className="mx-auto">Total</h4>
                        </div>
                        <div className="col-2 text-center">
                            <h4 id="totalPrice" className="mx-auto">Total</h4>
                        </div>
                        <div className="col-1 text-center">
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto">
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
            </div>
        </div>
    </div>

    );
}

export default Cart;