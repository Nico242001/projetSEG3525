import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Checkout = () => {
    let showAlert;
    if (sessionStorage.getItem(200) !== null) {
        sessionStorage.setItem(200,"false");
        showAlert = true;
    } else{
        showAlert = false;
    }
    const removeAlert = (e) => {
        document.getElementById("alert").remove();
    }
    const [postal, setPostal] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const history = useHistory();

    const handleClick = (e) => {
        var elements = document.getElementsByClassName("red");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = " *";
            elements[i].classList.remove("red");
        }
        let postalCode = postal;
        postalCode = postalCode.replace(/ /g, "");
        let part1 = postalCode.charAt(0) + postalCode.charAt(2) + postalCode.charAt(4);
        let part2 = postalCode.charAt(1) + postalCode.charAt(3) + postalCode.charAt(5);
        const numberReg = /[0-9]/;
        const specialChars = /[`!@#$%^&*()_+=\[\]{};':"\\|,<>\/?~]/;
        const specialCharsPostal = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const letter = /[a-zA-Z]/;
        if (city.length == 0) {
            document.getElementById("city").innerHTML = " *please enter a city";
            document.getElementById("city").classList.add("red");
        } else if (specialChars.test(city)) {
            document.getElementById("city").innerHTML = " *please enter no special characters";
            document.getElementById("city").classList.add("red");
        } else if (street.length == 0) {
            document.getElementById("street").innerHTML = " *please enter a street name";
            document.getElementById("street").classList.add("red");
        } else if (specialChars.test(street)) {
            document.getElementById("street").innerHTML = " *please enter no special characters";
            document.getElementById("street").classList.add("red");
        } else if (numberReg.test(street)) {
            document.getElementById("street").innerHTML = " *please enter no numbers";
            document.getElementById("street").classList.add("red");
        } else if (number.length == 0) {
            document.getElementById("number").innerHTML = " *please enter a street number";
            document.getElementById("number").classList.add("red");
        } else if (letter.test(number) || specialChars.test(number)) {
            document.getElementById("number").innerHTML = " *please enter only numbers";
            document.getElementById("number").classList.add("red");
        } else if (postalCode.length == 0) {
            document.getElementById("postal").innerHTML = " *please enter a postal code";
            document.getElementById("postal").classList.add("red");
        } else if (specialCharsPostal.test(postal)) {
            document.getElementById("postal").innerHTML = " *please enter no special characters";
            document.getElementById("postal").classList.add("red");
        } else if (!(letter.test(part1)) || !(numberReg.test(part2))) {
            document.getElementById("postal").innerHTML = " *please enter a correct postal code";
            document.getElementById("postal").classList.add("red");
        }
        else {
            history.push("/payment");
        }
    };

    return (<div className="checkout bg-light">
          {showAlert ? (
                <div id="alert" className="alert alert-warning mb-0 card-static">
                <strong>We currently can only ship to Canada but are currently working on expanding our shipping!</strong>
                <span className='p-1 float-end x' onClick={(e) => { removeAlert(e) }}>X</span>
              </div>
                ) : ""}
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
                    <label className='mb-1 mt-2'><span className='bold'>Province</span> *</label>
                    <br />
                    <select>
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
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold'>City</span><span id="city"> *</span></label>
                    <br />
                    <input type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold' >Street Name</span><span id="street"> *</span></label>
                    <br />
                    <input type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold' >Street Number</span><span id="number"> *</span></label>
                    <br />
                    <input type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='mb-1'><span className='bold'>Postal Code</span><span id="postal"> *</span></label>
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

export default Checkout;