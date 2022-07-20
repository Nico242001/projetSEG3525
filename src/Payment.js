import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Payment = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [city, setCity] = useState('');
    const history = useHistory();

    return (<div className="payment">

        <div className="container text-center mt-3">
            <div className="container-progressbar">
                <ul className="progressbar">
                    <li className="active">step 1</li>
                    <li className="firstStep">step 2</li>
                    <li >step 3</li>
                    <li >step 4</li>
                </ul>
            </div>
        </div>

        <div className="container my-4 p-0 pb-4">
            <div className="container text-center"><h2 className="text-center mb-4">Shipping Information</h2></div>
            <div className="container border border-3 border-dark bg-light fit">
                <div className="container">
                    
                    <label className='mb-1'><span className='bold'>First Name</span><span id="city"> *</span></label>
                    <br />
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold' >Last Name</span><span id="street"> *</span></label>
                    <br />
                    <input type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold' >Card Number</span><span id="number"> *</span></label>
                    <br />
                    <input type="text"
                        value={number1}
                        onChange={(e) => setNumber1(e.target.value)}
                    />
                    <input type="text"
                        value={number2}
                        onChange={(e) => setNumber2(e.target.value)}
                    />
                    <input type="text"
                        value={number3}
                        onChange={(e) => setNumber3(e.target.value)}
                    />
                    <input type="text"
                        value={number4}
                        onChange={(e) => setNumber4(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold'>Security Code</span><span id="postal"> *</span></label>
                    <br />
                    <input type="text"
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className='btn btn-primary btn-color mb-2' onClick={(e) => { handleClick(e) }}>Next</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Payment;