import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import './index.css';
import Shop from './Shop';
import Sport from './Sport';
import Items from './Items';
import Item from './Item';
import Cart from './Cart';
import Checkout from './Checkout';
import Payment from './Payment';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/sport/:sport">
            <Sport/>
          </Route>
          <Route exact path="/items/:item">
            <Items/>
          </Route>
          <Route exact path="/item/:id">
            <Item/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/payment">
            <Payment/>
          </Route>
          <Route exact path="/FAQ">
            <Payment/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
