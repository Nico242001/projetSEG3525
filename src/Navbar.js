import {FaShoppingCart} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let show;
    if (sessionStorage.getItem(200) === "true") {
        console.log("show");
        show = true;
        sessionStorage.setItem(200, "false");
    } else {
        show = false;
    }

    return (<div className="container-fluid stick p-0" id='navbar'> 
      
                
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
            <Link className="p-0" to={{ pathname: "https://www.facebook.com/" }} target="_blank" ><FaFacebookF className='icon'/></Link>
                <Link className="p-0" to={{ pathname: "https://www.instagram.com/" }} target="_blank"><FaInstagram className='icon'/></Link>
                <Link className="p-0" to={{ pathname: "https://www.youtube.com/" }} ><FaYoutube className='icon'/></Link>
                <Link className="p-0" to="/cart"><FaShoppingCart className='icon'/></Link>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;
