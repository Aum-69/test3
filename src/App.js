// import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Explore from './Explore';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Profilepage from './Profile';
import Logout from './Logout2';
import Settings from './Settings';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/logout">
            <Logout/>
          </Route>

          <Route path="/explore">
            <Explore/>
          </Route>

          <Route path="/profile">
            <Profilepage/>
          </Route>

          <Route path="/settings">
            <Settings/>
          </Route>

          <Route path= "/aboutus">
            <AboutUs/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
