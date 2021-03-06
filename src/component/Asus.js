import React from 'react';
import './Acer.css'
import { Card, Carousel } from 'react-bootstrap'

function Asus() {
  return (
    <div className="dell">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.tgdd.vn/Products/Images/44/233852/Slider/asus-vivobook-x515ma-n4020-br111t-slider-ddnb-800x444.jpg" height="400px"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://xgear.vn/wp-content/uploads/2020/04/Asus-AMD-4000-series-slider.jpg" height="400px"
            alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tanthanhdanh.vn/wp-content/uploads/2020/07/TTD_Promotion_2010_ManHinhAsusThang10_WebSlider.jpg" height="400px"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <h1>SẢN PHẨM ACER</h1>
      <div className="dell-container">
        <div className="dell-row">
          <div className="col-xl-2">
            <h3>Mức giá</h3>
            <div class="ui radio checkbox">
              <input type="radio" class="hidden" readonly="" tabindex="0" />
              <label>Dưới 10 triệu</label>
            </div>
            <div class="ui radio checkbox">
              <input type="radio" class="hidden" readonly="" tabindex="0" />
              <label>Từ 10 - 15 triệu</label>
            </div>
            <div class="ui radio checkbox">
              <input type="radio" class="hidden" readonly="" tabindex="0" />
              <label>Từ 15 - 20 triệu</label>
            </div>
            <div class="ui radio checkbox">
              <input type="radio" class="hidden" readonly="" tabindex="0" />
              <label>Trên 20 triệu</label>
            </div>
          </div>

          <div className="col-xl-10 acer__product">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Laptop Dell Gaming G7 15 7500 i7 10750H</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606696162332195_dell-gaming-g7-15-den-dd.jpg" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Laptop Dell Gaming G5 15 5500 i7 10750H</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/19/637493278502148750_dell-g5-15-5500-den-dd.jpg" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Dell G3 15 3500B i7 10750H/16GB</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Laptop Dell Gaming G7 15 7500 i7 10750H</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606696162332195_dell-gaming-g7-15-den-dd.jpg" height="400px" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Laptop Dell Gaming G5 15 5500 i7 10750H</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/19/637493278502148750_dell-g5-15-5500-den-dd.jpg" height="400px" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Dell G3 15 3500B i7 10750H/16GB</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png" height="400px" />
                <Card.Text>
                  <p>CPu: AMD Ryzen 5-5600H</p>
                  <p>RAM: 8 GB, DDR4, 3200 MHz</p>
                  <p>VGA: GeForce GTX 1650 4G-GDDR6</p>
                  <p>Ổ Cứng: SSD 512 GB or SSD 1TB</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Asus