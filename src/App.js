import './App.css';
import Header from './component/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import Registered from './component/Registered'
import Menu from './component/Menu';
import Slider from './component/Slider'
import './bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer'
import News from "./component/News";
import Contact from "./component/Contact";
import Acer from "./component/Acer";
import Asus from "./component/Asus";
import Dell from "./component/Dell";
import Lenovo from "./component/Lenovo";
import Cart from "./component/Cart";
import Products from "./component/Products";

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registered">
            <Registered />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
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
          <Route path="/">
            <Header />
            <Menu />
            <Slider />
            <Products />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
