import {FaShoppingCart} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //
    let show;
    if (sessionStorage.getItem(200) == "true") {
        show = true;
        sessionStorage.setItem(200, "false");
    } else {
        show = false;
    }
    const remove = (e) => {
        document.getElementById("alert").remove();
    }
    //
    return (<div className="container-fluid stick p-0" id='navbar'> 
    
      {show ? (
                <div id="alert" className="alert alert-warning mb-0" role="alert">
                <strong>We currently can only ship to Canada but are currently working on expanding our shipping!</strong>
                <span className='p-1 float-end x' onClick={(e) => { remove(e) }}>X</span>
              </div>
                ) : ""}
                
        <nav className="navbar-react">
            <h1 className="title"><Link to="/" >Joe's Sporting Goods</Link></h1>
            <div className="links-react">
                <Link to="/shop">Shop</Link>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Soccer</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/SoccerBalls">Balls</Link>
                        <Link to="/items/Cleats">Cleats</Link>
                        <Link to="/items/ShinGuards">Shin Guards</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Hockey</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/Sticks">Sticks</Link>
                        <Link to="/items/Skates">Skates</Link>
                        <Link to="/items/Helmets">Helmets</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">BasketBall</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/Basketballs">Balls</Link>
                        <Link to="/items/Shoes">Shoes</Link>
                        <Link to="/items/Shirts">Shirts</Link>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <FaFacebookF className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
                <Link className="p-0" to="/cart"><FaShoppingCart className='icon'/></Link>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;
