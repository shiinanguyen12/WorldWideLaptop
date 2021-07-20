import React from 'react'
import "../bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

class Footer extends React.Component {

    render() {

        return(

          <div className="footer">
          <div className="footer-container">
            <table className="footer-table">
            <thead>
              <tr>
                <th>Thông Tin Chung</th>
                <th>Chính Sách Chung</th>
                <th>Hỗ Trợ Khách Hàng</th>
                <th>Liên Kết Mạng Xã Hội</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giới Thiệu</td>
                <td>Chính sách Vận Chuyển</td>
                <td>Hướng Dẫn Mua Hàng Trực Tuyến</td>
               <td><FacebookIcon/>Facebook</td>
              </tr>
              <tr>
                <td>Tin Tức - Cập Nhật</td>
                <td>Chính Sách Bảo Hành</td>
                <td>Hướng Dẫn Mua Trả Góp</td>
                <td><InstagramIcon/>Instagram</td>
              </tr>
              <tr>
                <td>Thông Tin Khuyến Mãi</td>
                <td>Chính Sách Đổi Trả</td>
                <td>Hướng Dẫn Thanh Toán</td>
                <td><YouTubeIcon/>Youtube</td>
              </tr>
              <tr>
                <td>Thông Tin Liên Hệ</td>
                <td>Chính Sách Bảo Mật</td>
                <td herf="#">Từ vấn Kỹ Thuật</td>
                <td ><TwitterIcon/>Twitter</td>
              </tr>
            </tbody>
            </table>
            <div className="footer-container2">
              <h2>CÔNG TY TNHH </h2>
              <p>Địa Chỉ:</p>
              <p>Số Điện Thoại</p>
              <p>Email:</p>
              <p>Hotline:</p>
            </div>
            </div>
        </div>
        )
    }
}

export default Footer