import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Style/Header.css"

 const Header = () => {
    return (
        <div className='header'>
             <img  className='ama_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
             <div  className='link_div'>
                   <small>Hello</small>
                   <span className="link_pro">Select your address</span>
               </div>
            <div className='search'>
                <input/>
                <SearchIcon className="search_icon"/>
            </div>
            <div className="links">
               <div className='link_div' >
                   <small>Hello, Sharath</small>
                   <span className="link_pro">Sign in</span>
               </div>
               <div  className='link_div'>
                   <small>Returns</small>
                   <span className="link_pro">& Orders</span>
               </div>
               <div  className='link_div'>
                   <ShoppingCartIcon/>
                  <span>Cart</span>
               </div>
            </div>
        </div>
    )
}

export default Header;