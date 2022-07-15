import {FaShoppingCart} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (<div className="container-fluid stick p-0" id='navbar'> 
        <nav className="navbar-react">
            <h1 className="title"><Link to="/" >Joe's Sporting Goods</Link></h1>
            <div className="links-react">
                <Link to="/shop">Shop</Link>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Soccer</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/SoccerBalls/true">Balls</Link>
                        <Link to="/items/Cleats/true">Cleats</Link>
                        <Link to="/items/ShinGuards/true">Shin Guards</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">Hockey</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/Sticks/true">Sticks</Link>
                        <Link to="/items/Skates/true">Skates</Link>
                        <Link to="/items/Helmets/true">Helmets</Link>
                    </div>
                </div>
                <div className="dropdown-react">
                    <button className="dropbtn-react">BasketBall</button>
                    <div className="dropdown-content-react">
                        <Link to="/items/Basketballs/true">Balls</Link>
                        <Link to="/items/Shoes/true">Shoes</Link>
                        <Link to="/items/Shirts/false">Shirts</Link>
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
        </div>
     );
}
 
export default Navbar;
