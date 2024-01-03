import React from 'react'
import img1 from '../image/Img & BG.png'
const Bluetooth_headphones = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='bluetooth_headphones'>
                        <div className='headphones_text'>
                            <div className='bluetooth_texts'>
                            <div className='bluetooth_discount'>
                                <h3 className='medium_body_text headphones_discount'>$ 108.00</h3>
                                <h5 className='text'>/</h5>
                                <h4 className='large_body_text blutooth_text'>60% off</h4>
                            </div>
                            <h1 className='extraxl_body_text bluetooth_bigtext bluetooth_dektop_text'>Bluetooth Headphones with Mic</h1>
                            <h2 className='bluetooth_mobile_text extraxl_body_text bluetooth_bigtext'>Bluetooth Headphones...</h2>
                            </div>
                           
                            <button className='medium_body_text Bluetooth_button'>{'Shop now >'}</button>
                        </div>
                        <div>
                            <img src={img1} className='bluetooth_image mobile_img'  alt='error' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bluetooth_headphones