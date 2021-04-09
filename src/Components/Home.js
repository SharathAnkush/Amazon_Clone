import React from 'react'
import Product from './Product'
import './Style/Home.css'

 const Home = () => {
    return (
        <div className="home">
            <img className="banner" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />   
            {/* <img src="./public/banner.jpg"/> */}
           <div className="home_product">
           <Product
           id={24235}
           title={"Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black) + Arctic Fox Sling Shutter Topography Camera Bag"}
           image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ysa8pQOgM8exfl7mBDLkNO-F8oQfVqPRVA&usqp=CAU"}
           price={860}
           rating={2}
           />
            <Product
           id={24235}
           title={"JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"}
           image={"http://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/9baf8e77-58ec-4025-90a8-4011f3dbdd73/Images/ProductImages/Source/JBLT500BLK.jpg"}
           price={540}
           rating={4}
           />
           <Product
           id={24235}
           title={" Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)"}
           image={"https://www.gizmochina.com/wp-content/uploads/2019/09/Google-Pixel-4-1-600x600.jpg"}
           price={700}
           rating={5}
           />
            <Product
           id={24235}
           title={" Samsung Galaxy Watch Active (Black), SM-R500NZKAINU"}
           image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-S_iVlxxG8abbVjy77zIhEbVuUtc0a8XQw&usqp=CAU"}
           price={87}
           rating={5}
           />
           </div>
           <div className="home_product">
           
           <Product
           id={24235}
           title={" createCategory, getCategory, getAllCategory,updateCategory,removeCategory"}
           image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"}
           price={200}
           rating={5}
           />
           <Product
           id={24235}
           title={" createCategory, getCategory, getAllCategory,updateCategory,removeCategory"}
           image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"}
           price={200}
           rating={5}
           />
           </div>
           <Product
           id={24235}
           title={" createCategory, getCategory, getAllCategory,updateCategory,removeCategory"}
           image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"}
           price={200}
           rating={5}
           />
        </div>
    )
}

export default Home;