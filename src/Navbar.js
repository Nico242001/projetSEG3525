import {FaShoppingCart} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar-react">
            <h1 className="title"><Link to="/" >Joe's Sporting Goods</Link></h1>
            <div className="links-react">
                <Link to="/shop">Shop</Link>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Soccer</button>
                    <div className="dropdown-content-react">
                        <Link to="/">Balls</Link>
                        <Link to="/">Cleats</Link>
                        <Link to="/">Shin Guards</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Hockey</button>
                    <div className="dropdown-content-react">
                        <Link to="/">Sticks</Link>
                        <Link to="/">Skates</Link>
                        <Link to="/">Helmets</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">BasketBall</button>
                    <div className="dropdown-content-react">
                        <Link to="/">Balls</Link>
                        <Link to="/">Shoes</Link>
                        <Link to="/">Shirts</Link>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <FaFacebookF className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
                <FaShoppingCart className='icon'/>
            </div>
        </nav>
     );
}
 
export default Navbar;
