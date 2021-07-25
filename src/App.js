import React from 'react';
import './App.css';
import Header from './component/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import Registered from './component/Registered'
import Menu from './component/Menu';
import Slider from './component/Slider'
import './bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./component/Delivery";
import Insurance from "./component/Insurance";
import Acer from "./component/Acer";
import Asus from "./component/Asus";
import Dell from "./component/Dell";
import Lenovo from "./component/Lenovo";
import Cart from "./component/Cart";
import Products from "./component/Products";
import Details from './component/Details';
import Email from './component/Email';
import Video from './component/Video';
import News from './component/News';
import NewsDetails from './component/NewsDetails';
import Footer from './component/Footer';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/acer">
            <Acer />
          </Route>
          <Route path="/asus">
            <Asus />
          </Route>
          <Route path="/dell">
            <Dell />
          </Route>
          <Route path="/lenovo">
            <Lenovo />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registered />
          </Route>
          <Route path="/delivery">
            <Delivery />
          </Route>
          <Route path="/insurance">
            <Insurance />
          </Route>
          <Route exact path="/news">
            <Header />
            <News />
          </Route>
          <Route path="/news/:id">
            <NewsDetails />
          </Route>
          <Route path="/">
            <Header />
            <Menu />
            <Slider />
            <Products />
            <Video />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
