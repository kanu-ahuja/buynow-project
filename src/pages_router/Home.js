import React from 'react'
import Shopping_now from '../Pages/Shopping_now';
import Category_product_collection from '../Pages/Category_product_collection';
import Features_product from '../Pages/Features_product';
import Best_selling_product from '../Pages/Best_selling_product';
import Discount from '../Pages/discount';
import Top_brands from '../Pages/top_brands';
import New_arrival_products from '../Pages/new_arrival_products';
import Bluetooth_headphones from '../Pages/Bluetooth_headphones';
import Relates_item from '../Pages/Relates_item';
import Our_partners from '../Pages/Our_partners';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <>
            <Shopping_now />
            <Category_product_collection />
            <Features_product />
            <Best_selling_product />
            <Discount />
            <Top_brands />
            <New_arrival_products />
            <Bluetooth_headphones />
            <Relates_item />
            <Our_partners />
            <Footer />
        </>
    )
}

export default Home
