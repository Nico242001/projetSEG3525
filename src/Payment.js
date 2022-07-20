const Payment = () => {
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
    return ( <div>hey</div> );
}
 
export default Payment;