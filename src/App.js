import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Shop from './Shop';
import Sport from './Sport';


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
          {/* <Route exact path="/soccer">

          </Route>
          <Route exact path="/hockey">
            
          </Route>
          <Route exact path="/basketball">
            
          </Route> */}
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
