import React from 'react'
import mobileimg from '../image/mobile_laptop.png'
import discountimg1 from '../image/discount1.png'
import discountimg2 from '../image/discount2.png'
import First_dot from '../image/First_dot.svg'
import Second_dot from '../image/Second_dot.svg'
import Third_dot from '../image/Third_dot.svg'
import Fourth_dot from '../image/Fourth_dot.svg'


const Discount = () => {
    return (

        <>
            <section>
                <div className='container'>
                    <div className='discount_cards_collection'>
                        <div className='discount_cards'>
                            <div className='discount_cards_items'>
                                <div className='discount_cards_text'>
                                    <div className='discount_text'>
                                        <h3 className='xl_body_text'>10% off</h3>
                                        <h4 className='medium_body_text discount_desc'>Apple MacBook Pro </h4>
                                        <h2 className='large_body_text discount_text'>$ 500.00</h2>
                                    </div>
                                    <h4 className='discount_line'></h4>
                                    <div className='discount_Dots'>
                                        <img src={First_dot} alt='error' className='imgdots' />
                                        <img src={Second_dot} alt='error' className='imgdots' />
                                        <img src={Third_dot} alt='error' className='imgdots' />
                                        <img src={Fourth_dot} alt='error' className='imgdots' />
                                    </div>
                                </div>

                                <div className='discount_desktop'>
                                    <img src={discountimg1} alt='error' />
                                </div>
                                <div className='discount_mobile'>
                                    <img src={mobileimg} alt='error' />
                                </div>
                            </div>
                            <div className='discount_cards_items discount_items'>
                                <div className='discount_cards_text'>
                                    <div className='discount_text'>
                                        <h3 className='xl_body_text'>15% off</h3>
                                        <h4 className='medium_body_text discount_desc'>JBL Headphones</h4>
                                        <h2 className='large_body_text'>$ 600.00</h2>
                                    </div>
                                    <h4 className='discount_line'></h4>
                                    <div className='discount_Dots'>
                                        <img src={First_dot} alt='error' className='imgdots' />
                                        <img src={Second_dot} alt='error' className='imgdots' />
                                        <img src={Third_dot} alt='error' className='imgdots' />
                                        <img src={Fourth_dot} alt='error' className='imgdots' />
                                    </div>
                                </div>
                                <div>
                                    <img src={discountimg2} alt='error' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discount