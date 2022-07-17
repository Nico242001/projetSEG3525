import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import './index.css';
import Shop from './Shop';
import Sport from './Sport';
import Items from './Items';
import Item from './Item';


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
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
