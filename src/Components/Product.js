import React from 'react'
import './Style/Product.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Product = ({id,title,price,image,rating}) => {
    return (
        <div className='product'>
            <div className="product_info">
            <p className='title'>{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
            <img src={image}/>
            {/* <button className="cart_btn"></button> */}
            <div className="cart_btn"> <span><ShoppingCartIcon/> <span className="sp">Add To Cart</span></span>  </div>
        </div>
    )
}

export  default Product;