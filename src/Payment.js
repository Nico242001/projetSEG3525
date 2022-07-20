import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Payment = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');

    const [security, setSecurity] = useState('');
    const history = useHistory();
    const handleClick = (e) => {
        var elements = document.getElementsByClassName("red");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = " *";
            elements[i].classList.remove("red");
        }
    }


    return (<div className="payment bg-light">

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
            <div className="container text-center"><h2 className="text-center mb-4">Payment Information</h2></div>
            <div className="container border border-3 border-dark bg-light fit">
                <div className="container">
                    
                    <label className='mb-1'><span className='bold'>First Name</span><span id="name"> *</span></label>
                    <br />
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold' >Last Name</span><span id="last"> *</span></label>
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
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                   
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold'>Security Code</span><span id="security"> *</span></label>
                    <br />
                    <input type="text"
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                    />
                    <br />
                    <br />
                    {/* <button className='btn btn-primary btn-color mb-2' onClick={(e) => { handleClick(e) }}>Next</button> */}
                </div>
            </div>
        </div>
    </div>);
}

export default Payment;