import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'

function Video() {
  return (
    <div className="video__box">
      <ReactPlayer className="video" url="https://youtu.be/vhlP7i8n-Ko" />
      <span>
      <h2>Đừng Thiếu Hiểu Biết Khi Mua LapTop</h2>
      <p>Trên thị trường hiện nay có rất nhiều mẫu mã Laptop dành cho nhiều phân khúc người tiêu dùng. Tuy nhiên việc lựa chọn Laptop phù hợp với nhu cầu cho riêng bản thân là vô cùng khó khăn. Nhưng nếu như chúng ta lưu ý những điều trên thì việc lựa chọn Laptop phù hợp là rất dễ dàng cho riêng mình</p>
      </span>
    </div>
  );
};
export default Video