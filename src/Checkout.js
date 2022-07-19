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
        <div className="container text-center"><h2 className="text-center mb-4">Shipping Information</h2></div>
            <div className="container border border-3 border-dark bg-light fit">
                <div className="container">
                    <form>
                        <label className='mb-1 mt-2'><span className='bold'>Province</span></label>
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
                        <label className='mb-1'><span className='bold'>City</span></label>
                        <br/>
                        <input type="text"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    
                        <br/>
                        <br/>
                        <label className='mb-1'><span className='bold'>Adress</span></label>
                        <br/>
                        <input type="text"
                            required
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                     
                        <br/>
                        <br/>
                        <label className='mb-1'><span className='bold'>Postal Code</span></label>
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