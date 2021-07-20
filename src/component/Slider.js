import React from 'react';
import '../bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'

function Slider (){
     
      return (
      <>
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606874548983769_F-C1_1200x300.png" 
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606874476951006_F-C1_1200x300%20(2).png" 
            alt=""/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606874500076352_F-C1_1200x300%20(4).png" 
            alt=""
          />
        </Carousel.Item>
      </Carousel>
              
   </>
        )
    }

export default Slider