import React from 'react'
import img2 from '../image/image1.jpg'
import img3 from '../image/Fire.png'
import Buttoncart from '../components/Buttons/Buttoncart'
const Shopping_now = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='Shopping_now'>
                        <div className='Shopping_now_card'>
                            <img src={img2} alt='error' className='Shopping_now_image'></img>
                            <div className='Shopping_now_text'>
                                <h1 className='xxl_body_text shopping_now_heading'>Products for your need start shopping now</h1>
                                <h5 className='shopping_now_line'></h5>
                                <div className='shopping_now_text2'>
                                    <h2 className='large_body_text'>For first pruches</h2>
                                    <img src={img3} alt='error' className='shopping_image'/>
                                    <h3 className='large_body_text shopping_now_discount'>get 30% off</h3>
                                </div>
                                <div className='Button_shop_now'>
                                    <Buttoncart text='Shop Now' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shopping_now