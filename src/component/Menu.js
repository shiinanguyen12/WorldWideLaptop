import React from 'react';
import "../bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Menu.css'
function Menu() {
  return (
    <div className="nav__menu">
      <Navbar bg="dark" variant="dark">
        <Container className="menu__btn__group" id="btn__group">
          <Nav className="mb-auto">
            <Button className="menu__btn">
                <NavDropdown title="Danh mục sản phẩm" id="navbarScrollingDropdown">
                  <Link to="/acer">
                  <NavDropdown.Item href="/acer">Acer</NavDropdown.Item>
                  </Link>
                  <Link to="/asus">
                  <NavDropdown.Item href="/asus">Asus</NavDropdown.Item>
                  </Link>
                  <Link to="/dell">
                  <NavDropdown.Item href="/dell">Dell</NavDropdown.Item>
                  </Link>
                  <Link to="/lenovo">
                  <NavDropdown.Item href="/lenovo">Lenovo</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Button>  
              <Link to="/news">
              <Button className="menu__btn">
               News
              </Button>
            </Link>       
            <Link to="/delivery">
              <Button className="menu__btn">
                Chính sách giao hàng
              </Button>
            </Link>
            <Link to="/insurance">
              <Button className="menu__btn">
                Chính sách bảo hành
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default Menu