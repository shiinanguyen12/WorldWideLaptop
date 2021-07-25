import React from 'react'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Dell Gaming G5 15 i7",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/19/637493278503711268_dell-g5-15-5500-den-1.jpg",
                "ram": "Ram: 16 GB, DDR4, 2933 MHz",
                "cpu": "CPU: Intel Core i7-10750H",
                "price": 1600,
                "rating":"****",
                "vga": "VGA: NVIDIA GeForce RTX 2070 8GB",
                "o":"Ổ Cứng: SSD 1 TB",
                "count": 1
            },

            {
                "_id": "2",
                "title": "Dell Gaming G7 15 i7 ",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/30/637606707029764010_dell-gaming-g7-15-den-1.jpg",
                "ram": "Ram: 16 GB, DDR4, 2933 MHz",
                "cpu": "CPU: Intel Core i7-10750H",
                "price": 1500,
                "rating":"****",
                "vga": "VGA: NVIDIA GeForce RTX 2070 8GB",
                "o":"Ổ Cứng: SSD 1 TB",
                "count": 1
            },

            {
                "_id": "3",
                "title": " Dell Inspiron N7306 i5 ",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/18/637412897397653428_dell-inspiron-n7306-den-1.png",
                "ram": "Ram: 8 GB, LPDDR4, 4266 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1200,
                "rating":"****",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512 GB",
                "count": 1
            },

            {   "_id": "4",
                "title": " Dell Inspiron N5406 ",

                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/15/637436514731163376_dell-inspiron-n5406-xam-1.png",
                "ram": "Ram: 8 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1000,
                "rating":"***",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512 GB",
                "count": 1
            },

            {    "_id": "5",
                 "title": "Dell Vostro V5502 i5",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/9/637431273747646316_dell-vostro-v5502-xam-1.png",
                "ram": "Ram: 8 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1100,
                "rating":"*****",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 256 GB",
                "count": 1
            },

            {
                "_id": "6",
                "title": "Lenovo Legion 5 15ACH6",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/6/2/637266891203571067_lenovo-legion-5-15arh05-den-1.png",
                "ram": "Ram: 8 GB, DDR4, 3200 MHz",
                "cpu": "CPU: AMD Ryzen 5-5600H",
                "price": 1400,
                "rating":"****",
                "vga": "VGA: NVIDIA® GeForce RTX™ 3060 6GB G6",
                "o":"Ổ Cứng: SSD 512 GB",
                "count": 1
            },

            {
                "_id": "7",
                "title":"Lenovo Legion 5 R7",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/6/2/637266891203571067_lenovo-legion-5-15arh05-den-1.png",
                "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: AMD Ryzen 7-4800H",
                "price": 1150,
                "rating":"****",
                "vga": "VGA: NVIDIA® GeForce® GTX1650Ti 4GB",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "8",
                "title": "Lenovo Yoga Slim 7",
                "src": "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/23/637521079711830989_lenovo-yoga-slim-7-xam-1-evo.jpg",
                "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 950,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "9",
                "title": "Lenovo ThinkPad  X1",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/3/637583188739724409_lenovo-thinpad-x1-nano-den-1.jpg",
                "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i7-1135G7",
                "price": 1900,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "10",
                "title": "Lenovo ThinkPad E14 ",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/1/18/637465577728319272_lenovo-thinkpad-e14-gen-2-den-1.png",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 950,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "11",
                "title": "Acer Nitro Gaming A515 ",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/10/637509924795192736_acer-nitro-gaming-an515-44-den-1.jpg",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 850,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "12",
                "title": "Acer Swift 3 SF313 ",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/9/637614353930834409_acer-swift-3-sf313-53-bac-1.jpg",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 950,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "13",
                "title": "Acer Aspire 3 A315",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/15/637514245412537151_acer-aspire-3-a315-56-den-1.jpg",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1050,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "14",
                "title": " Acer Aspire 3 A315 56",
                  "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/4/13/637223737030598859_acer-aspire-3-a315-56-den-1.png",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1100,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
           
            {
                "_id": "15",
                "title": "Acer Nitro Gaming AN515",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/13/637539064703099718_acer-nitro-gaming-an515-56-den-1.jpg",
                "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 900,
                "rating":"***",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "16",
                "title": "Asus Gaming Zephyrus ",
                  "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352469339459214_asus-zephyrus-ga401-xam-1.png",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1250,
                "rating":"***",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "17",
                "title": " Asus Strix G531GT",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/5/17/636936819554058664_asus-strix-g531gt-al030t-1.png",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1450,
                "rating":"****",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "18",
                "title": "Asus Zenbook UX425EA",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387847968338274_637335980720863180_asus-zenbook-ux425ja-xam-1.png",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1050,
                "rating":"***",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },
            {
                "_id": "19",
                "title": "ASUS Gaming TUF FX516PE",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/29/637526137028914779_asus-tuf-gaming-fx516-xam-1.jpg",
                 "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1150,
                "rating":"**",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            },{
                "_id": "20",
                "title": "Asus TUF FX506LI HN096T",
                 "src":"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/28/637395003614847177_asus-tuf-fx506-xam-1.png",
                "ram": "Ram: 16 GB, DDR4, 3200 MHz",
                "cpu": "CPU: Intel Core i5-1135G7",
                "price": 1130,
                "rating":"***",
                "vga": "VGA: Intel Iris Xe Graphics",
                "o":"Ổ Cứng: SSD 512GB",
                "count": 1
            }
            
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


