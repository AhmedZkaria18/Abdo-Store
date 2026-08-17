import Home from './Pages/Home'
import Shop from './Pages/Shop'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';

import PrivateRoute from './Auth/PrivateRoute';
import Account from './Components/User/User';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import ShopingCart from './Pages/ShopingCart';
import Footer from './Components/General/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    var nv = document.getElementsByClassName("navbar")[0];
    var pr = document.getElementsByClassName("App")[0];
    var trg = document.getElementsByClassName("beforeNav")[0];
    pr.insertBefore(nv, trg);
  }, []);

  return (
    <Router basename="/">
      <header></header>
      <Navbar /> 
      <div className={'App'}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />      
          <Route path="/details" component={Details} /> 
          <PrivateRoute path="/account" exact component={Account}/>
          <Route path="/login"  component={Login} />
          <Route path="/signup"  component={SignUp} />
          <Route path="/shopingcart"  component={ShopingCart} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
