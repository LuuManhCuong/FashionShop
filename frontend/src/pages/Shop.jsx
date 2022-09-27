import React from 'react'

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import ShopslideBar from '../components/ShopSlideBar/ShopslideBar';
import ProductItem from '../components/ProductItem/ProductItem';
import LoadingPage from '../components/LoadingPage/LoadingPage';
function Shop() {
    return (
        <>
            <Header />
            <div className='shopContainer'>
                <div className='sileBar'>
                    <ShopslideBar />
                </div>
                <div className='product'>
                    {/* cân css */}
                    <div className='shopProductWrap'>
                        {/* cân 33% */}
                        <div className="shopProduct">
                            <ProductItem />
                        </div>
                        <div className="shopProduct">
                            <ProductItem />
                        </div>                       
                         <div className="shopProduct">
                            <ProductItem />
                        </div>
                        <div className="shopProduct">
                            <ProductItem />
                        </div>
                        <div className="shopProduct">
                            <ProductItem />
                        </div>
                        <div className="shopProduct">
                            <ProductItem />
                        </div>
                    </div>

                    <LoadingPage />
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Shop