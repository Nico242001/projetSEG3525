import { Link } from 'react-router-dom'
const Checkout = () => {
    return ( <div className="checkout bg-light">
        <div className="container my-4 p-0 pb-4">
    <div className="container border border-3 border-dark bg-light fit">
    <div className="container text-center"><h4 className="text-center">Shipping Information</h4></div>
    <div className="container">
        <br/>
      
        <h5>Contact Name</h5>
        <input type="text"/>
        <br/>
        <br/>
        <h5>Country</h5>
        <input type="text"/>
        <br/>
        <br/>
        <h5>Adress</h5>
        <input type="text"/>
        <br/>
        <br/>
        <h5>City</h5>
        <input type="text"/>
        <br/>
        <br/>
        <h5>Province</h5>
        <input type="text"/>
        <br/>
        <br/>
        <h5>Postal Code</h5>
        <input type="text"/>
        <br/>
        <br/>
        <Link type="button" className='btn btn-primary btn-color'>Next</Link>
    </div>
    </div>
    </div>


    </div> );
}
 
export default Checkout;