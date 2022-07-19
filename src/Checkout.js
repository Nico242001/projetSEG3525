import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Checkout = () => {
    const [postal, setPostal] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('Ontario');
    const history = useHistory();
    const handleClick = (e) => history.push("/cart");
    return (<div className="checkout bg-light">
        <div className="container my-4 p-0 pb-4">
        <div className="container text-center"><h1 className="text-center">Shipping Information</h1></div>
            <div className="container border border-3 border-dark bg-light fit">
                <div className="container">
                    <br />
                    <form>
                        <label className='mb-1'>Province</label>
                        <br/>
                        <select
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                        >
                            <option value="Ontario">Ontario</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="NewB">New Brunswick</option>
                            <option value="NewF">Newfoundland and Labrador</option>
                            <option value="Nova">Nova Scotia</option>
                            <option value="Prince">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Sas">Saskatchewan</option>
                            <option value="North">Northwest Territories</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Yukon">Yukon</option>
                        </select>
                     
                        <br/>
                        <br/>
                        <label className='mb-1'>City</label>
                        <br/>
                        <input type="text"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    
                        <br/>
                        <br/>
                        <label className='mb-1'>Adress</label>
                        <br/>
                        <input type="text"
                            required
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                     
                        <br/>
                        <br/>
                        <label className='mb-1'>Postal Code</label>
                        <br/>
                        <input type="text"
                            required
                            value={postal}
                            onChange={(e) => setPostal(e.target.value)}
                        />
                       
                        <br/>
                        <br/>
                        <button className='btn btn-primary btn-color' onClick={(e) => { handleClick(e) }}>Next</button>
                    </form>
                </div>
            </div>
        </div>


    </div>);
}

export default Checkout;