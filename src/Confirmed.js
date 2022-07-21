import{Link} from 'react-router-dom';
const Confirmed = () => {
    sessionStorage.setItem(0,0);
    let keys = Object.keys(sessionStorage);
    for(let i; i<keys.length;i++){
        if((keys[i]==0) || (keys[i]==200)){
            sessionStorage.removeItem(keys[i])
        }
    }

    return (<div className="confirmed bg-light">

        <div className="progress mt-4 bar">
            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                Step 4 of 4, Finished
            </div>
        </div>

        <div className="container">
            <h1 className="fit mx-auto mt-5">Your purchase as been completed!<br/>And your Items will be shipped shortly.</h1>
            <Link to="/" className="mt-3 mx-auto btn btn-primary btn-color">Home</Link>
        </div>

    </div>);
}

export default Confirmed;