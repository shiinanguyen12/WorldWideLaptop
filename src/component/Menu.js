import React from 'react';
import "../bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Menu.css'
function Menu() {
  return (
    <div className="nav__menu">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Link to="/Acer">
              <Button className="menu__btn">
                <NavDropdown title="Danh mục sản phẩm" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Button>
            </Link>
            <Link to="/Acer">
              <Button className="menu__btn">
                Chính sách giao hàng
              </Button>
            </Link>
            <Link to="/Acer">
              <Button className="menu__btn">
                Chính sách bảo hành
              </Button>
            </Link>
            <Link to="/Acer">
              <Button className="menu__btn">
                Dịch vụ sửa chữa
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default Menu