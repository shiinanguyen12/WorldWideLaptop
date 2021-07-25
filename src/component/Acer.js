import React from 'react';
import './Acer.css'
import { Card, Carousel } from 'react-bootstrap'

function Acer() {
  return (
    <div className="dell">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bizweb.dktcdn.net/100/405/366/themes/790799/assets/slider_3_image.png?1606191366412" height="400px"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bmsc-computer.com/image/cache/catalog/Slider/Slide1-870x560-870x560-870x560.jpg" height="400px"
            alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.evetech.co.za/repository/ProductImages/Acer-Slider-Banner-980x380px-v1.jpg" height="400px"
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
                <Card.Title>Acer Nitro Gaming A515</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/10/637509924795192736_acer-nitro-gaming-an515-44-den-1.jpg" />
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
                <Card.Title>Acer Swift 3 SF313</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614353930834409_acer-swift-3-sf313-53-bac-1.jpg" />
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
                <Card.Title>Acer Aspire 3 A315-56</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/15/637514245412537151_acer-aspire-3-a315-56-den-1.jpg" />
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
                <Card.Title>Acer Aspire 3 A315-57G</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/24/637443973978298927_acer-aspire-3-a315-57g-den-1.png" />
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
                <Card.Title>Acer Nitro Gaming AN515 </Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/5/637610884165519217_acer-nitro-gaming-an515-57-den-1.jpg" />
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
                <Card.Title>Acer Nitro Gaming AN515</Card.Title>
                <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/27/637551184147508109_acer-nitro-gaming-an515-45-den-1.jpg" />
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
  )
}
export default Acer