import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Checkout = () => {
    const [postal, setPostal] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
 
    // const [province, setProvince] = useState('Ontario');
    const history = useHistory();
    
    const handleClick = (e) => {
        var elements = document.getElementsByClassName("red");
        for(let i = 0; i<elements.length;i++){
            elements[i].innerHTML = " *";
            elements[i].classList.remove("red");
        }
        console.log("in");
        
        const specialChars =  /[`!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;
        if(city.length == 0){
            document.getElementById("city").innerHTML=" *please enter a city";
            document.getElementById("city").classList.add("red");
        }else if(specialChars.test(city)){
            document.getElementById("city").innerHTML=" *please enter no special characters";
            document.getElementById("city").classList.add("red");
        }
        //  else if(){

        // }
        else{
           
            console.log("history");
            history.push("/payment");
        }
    };
    const useEffect = () =>{

    }
    return (<div className="checkout bg-light">
        <div className="container my-4 p-0 pb-4">
        <div className="container text-center"><h2 className="text-center mb-4">Shipping Information</h2></div>
            <div className="container border border-3 border-dark bg-light fit">
                <div className="container">
                  
                        <label className='mb-1 mt-2'><span className='bold'>Province</span> *</label>
                        <br/>
                        <select
                            // value={province}
                            // onChange={(e) => setProvince(e.target.value)}
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
                        <label className='mb-1'><span className='bold'>City</span><span id="city"> *</span></label>
                        <br/>
                        <input type="text" 
                            // required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    
                        <br/>
                        <br/>
                        <label className='mb-1'><span className='bold' >Street Name</span><span id="street"> *</span></label>
                        <br/>
                        <input type="text"
                            // required
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                          <label className='mb-1'><span className='bold' >Street Number</span><span id="number"> *</span></label>
                        <br/>
                        <input type="text"
                            // required
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                     
                        <br/>
                        <br/>
                        <label className='mb-1'><span className='bold'>Postal Code</span><span id="postal"> *</span></label>
                        <br/>
                        <input type="text"
                            // required
                            value={postal}
                            onChange={(e) => setPostal(e.target.value)}
                        />
                       
                        <br/>
                        <br/>
                        <button className='btn btn-primary btn-color' onClick={(e) => { handleClick(e) }}>Next</button>
                    
                </div>
            </div>
        </div>


    </div>);
}

export default Checkout;