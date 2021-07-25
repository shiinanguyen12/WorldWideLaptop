import React from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../component/Context';
import './Products.css'

 class Product extends React.Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <>
            <div className="panel__sales">
            <h2>SẢN PHẨM BÁN CHẠY</h2>
            </div>
            <div id="product">
             { products.map(product =>(
            <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
                <img src={product.src} alt=""/>
            </Link>
                <div className="content">
                <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
               </h3>
                <span>${product.price}</span>
                <p>{product.rating}</p>
                 <p>{product.ram}</p>
                <p>{product.cpu}</p>
                 <p>{product.vga}</p>
                <p>{product.o}</p>

         <button onClick={()=> addCart(product._id)}>Add to cart</button>
            </div></div>)) }
            </div>
            </>
        )
    }
}

export default Product
