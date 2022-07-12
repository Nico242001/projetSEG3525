import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Shop from './Shop';
import Sport from './Sport';
global.jQuery = require('jquery');
require('bootstrap');
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
          {/* <Route exact path="/sport/:sport">
            <Sport/>
          </Route> */}
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
