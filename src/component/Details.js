import React from 'react';
import './Details.css';
import DetailsThumb from '../component/DetailsThumb';
import {Tab, Tabs} from 'react-bootstrap'
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom'
class Details extends React.Component{
  

  state = {
    products: [
      {
        "_id": "1",
        "title": "Dell Gaming G5 15 i7 10750H",
        "src": [
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/19/637493278503711268_dell-g5-15-5500-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/19/637493278503711268_dell-g5-15-5500-den-1.jpg",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595658403786_dell-g3500-den-1.png",
            "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595658403786_dell-g3500-den-1.png"
          ],
        "rating": "****",
        "ram": "Ram: 16 GB, DDR4, 2933 MHz",
        "price": 1600,
        "cpu":"CPU: Intel Core i7-10750H",
        "vga":"VGA: NVIDIA GeForce RTX 2070 8GB",
        "o": "Ổ Cứng: SSD 1 TB",
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render(){
    const {products, index} = this.state;
    return(
      <>
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <p>{item.rating}</p>
                <p>{item.ram}</p>
                <p>{item.cpu}</p>
                <p>{item.vga}</p>
                <p>{item.o}</p>
               
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                 <button className="cart">Add to cart</button>
               

              </div>
            </div>
          ))
        }
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="contianer-mb-3">
      <Tab eventKey="home" title="Chi Tiết">
          <h5>Laptop Dell G5 15 5500 i7 (70225485) với chip intel core i7 thế hệ thứ 10 được cải tiến mang đến hiệu năng ấn tượng, cấu hình mạnh mẽ, hỗ trợ nâng cấp, thỏa sức chiến game nặng hay thử các tác vụ đồ họa chuyên nghiệp. Bạn sẽ thực sự thấy hài lòng với những gì mà chiếc laptop này mang lại.</h5>
          <h6>Thiết kế ấn tượng, mạnh mẽ đậm chất gaming</h6>
          <p>Không quá thanh mảnh nhưng cực kỳ tinh tế, Dell G5 15 5500 xứng đáng là 1 chiếc laptop gaming với thiết kế chắc chắn, mạnh mẽ, tạo điểm nhấn nổi bật nhờ những đường song song đặc biệt bao quanh thân máy. Mặc dù laptop không quá mỏng nhẹ khi sở hữu độ dày tới 31.13 mm và trọng lượng 2.65 kg, nhưng nó chấp nhận được cho 1 chiếc laptop gaming.</p>
          <p>Được bảo vệ từ chất liệu nhựa cao cấp, sản phẩm mang màu đen sang trọng với mặt ngoài được phủ lớp ánh kim và logo màu xanh nổi bật, giúp chiếc laptop dễ dàng thu hút sự yêu thích của bạn ngay từ cái nhìn đầu tiên.</p>
           <p>Dell G5 15 5500 hỗ trợ vùng phím số, khoảng cách các phím rộng, mặt phím hơi nhám, độ nhạy cao, độ nảy tốt, hoàn hảo cho nhu cầu soạn thảo văn bản, thao tác phím nhanh. Vùng phím WASD nổi bật kết hợp hệ thống đèn nền LED RGB để game thủ sẵn sàng cho các trận chiến quyết liệt ngay cả trong điều kiện thiếu sáng.</p>
            <ReactPlayer url="https://youtu.be/2zvXiu5UDOM"/>
            <h5>Hiệu năng mạnh mẽ, cân mọi tựa game hot</h5>
            <p>Laptop Dell G5 mang đến sức mạnh từ con chip Intel Core i7 Ice Lake gen 10 dòng H với xung nhịp cơ bản 2.60 GHz và đạt 5.0 GHz khi ép xung kết hợp với RAM 8 GB tốc độ Bus RAM 2933 MHz cho hiệu năng “cân” mọi ứng dụng nặng, làm việc đa nhiệm hay chơi game hay streaming đều mượt mà. Hơn nữa, máy cũng có sẵn 1 thanh RAM trống để tiện cho việc nâng cấp về sau (Hỗ trợ RAM tối đa 32 GB).</p>
      </Tab>
    </Tabs>
      </>
     
    );
  };
}

export default Details;