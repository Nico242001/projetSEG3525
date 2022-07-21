import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
const Payment = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');

    const [security, setSecurity] = useState('');
    const history = useHistory();
    const handleClick = (e) => {
        let num = number;
        let sec = security;
        sec = sec.replace(/ /g, "");
        sec = sec.replace(/-/g, "");
        num = num.replace(/ /g, "");
        num = num.replace(/-/g, '');
        const numberReg = /[0-9]/;
        const onlyNum = /^[0-9]+$/;
        
        var elements = document.getElementsByClassName("red");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = " *";
            elements[i].classList.remove("red");
        }
        if(name.length == 0){
            document.getElementById("name").innerHTML = " *please enter a first name";
            document.getElementById("name").classList.add("red");
        } else if(numberReg.test(name)){
            document.getElementById("name").innerHTML = " *invalid first name";
            document.getElementById("name").classList.add("red");
        } else if(lastName.length == 0){
            document.getElementById("last").innerHTML = " *please enter a last name";
            document.getElementById("last").classList.add("red");
        }
        else if(numberReg.test(lastName)){
            document.getElementById("last").innerHTML = " *invalid first name";
            document.getElementById("last").classList.add("red");
        }
        else if(num.length == 0){
            document.getElementById("number").innerHTML = " *please enter a card number";
            document.getElementById("number").classList.add("red");
        }else if(num.length != 16){
            document.getElementById("number").innerHTML = " *invalid card number ";
            document.getElementById("number").classList.add("red");
        } else if(!(onlyNum.test(num))){
            document.getElementById("number").innerHTML = " *invalid card number ";
            document.getElementById("number").classList.add("red");
        }else if(sec.length == 0){
            document.getElementById("security").innerHTML = " *enter a security number";
            document.getElementById("security").classList.add("red");
        } else if((!(sec.length == 3)&&!(sec.length == 4)) || !(onlyNum.test(sec))){
            document.getElementById("security").innerHTML = " *invalid a security number";
            document.getElementById("security").classList.add("red");
        } else{
            history.push("/confirmed");
        }
    }


    return (<div className="payment bg-light">

<div className="progress mt-4 bar">
                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                    Step 3 of 4
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
                    <button className='btn btn-primary btn-color mb-2' onClick={(e) => { handleClick(e) }}>Next</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Payment;