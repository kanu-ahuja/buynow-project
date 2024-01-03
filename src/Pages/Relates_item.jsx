import React from 'react'
import relatedimg1 from '../image/relatedimg1.png'
import relatedimg2 from '../image/relatedimg2.png'
import relatedimg3 from '../image/relatedimg3.png'
import relatedimg4 from '../image/relatedimg4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';

const Relates_item = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='new_arrival_products'>
                        <div>
                            <div className='new_arrival_brand'>
                                <h1 className='xl_body_text'>Related items for you</h1>
                                <div className='new_arrival_text'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3327 11C18.3327 10.4937 17.9223 10.0833 17.416 10.0833H9.59107C8.70016 10.0833 8.25399 9.00619 8.88396 8.37623L11.6502 5.61C12.0093 5.25093 12.0082 4.66844 11.6479 4.31063C11.2893 3.95461 10.7104 3.95564 10.3531 4.31292L4.37312 10.2929C3.9826 10.6834 3.9826 11.3166 4.37312 11.7071L10.3528 17.6868C10.7099 18.0439 11.2888 18.0439 11.6459 17.6868C12.0027 17.3299 12.003 16.7515 11.6465 16.3943L8.88027 13.6231C8.25117 12.9929 8.69754 11.9167 9.58801 11.9167H17.416C17.9223 11.9167 18.3327 11.5063 18.3327 11Z" fill="#495F6A" />
                                    </svg>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66732 11C3.66732 10.4937 4.07772 10.0833 4.58398 10.0833H12.4089C13.2998 10.0833 13.746 9.00619 13.116 8.37623L10.3498 5.61C9.99075 5.25093 9.99178 4.66844 10.3521 4.31063C10.7107 3.95461 11.2896 3.95564 11.6469 4.31292L17.6269 10.2929C18.0174 10.6834 18.0174 11.3166 17.6269 11.7071L11.6472 17.6868C11.2901 18.0439 10.7112 18.0439 10.3541 17.6868C9.99726 17.3299 9.997 16.7515 10.3535 16.3943L13.1197 13.6231C13.7488 12.9929 13.3025 11.9167 12.412 11.9167H4.58398C4.07772 11.9167 3.66732 11.5063 3.66732 11Z" fill="#495F6A" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='related_collection'>
                            <Swiper
                                spaceBetween={24}
                                slidesPerView={4}
                                breakpoints={{
                                    300: {
                                        // width: 576,
                                        slidesPerView: 1.5,
                                        spaceBetween: '10px'
                                    },
                                    576: {
                                        // width: 576,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        // width: 768,
                                        slidesPerView: 4,
                                    },
                                }}

                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}>

                                <SwiperSlide>
                                    <div className='relative_items'>
                                        <div className='relative_icons'>
                                            <h5 className='relates_discount'>10% off</h5>
                                        </div>
                                        <img src={relatedimg1} className='related_image' alt='error' />
                                        <div className='relates_dots'>
                                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#E57373" />
                                                <circle cx="20" cy="4" r="4" fill="#FFB400" />
                                                <circle cx="36" cy="4" r="4" fill="#EC407A" />
                                                <circle cx="52" cy="4" r="4" fill="#2E1A3E" />
                                            </svg>
                                        </div>
                                        <div className='relates_text'>
                                            <div>
                                                <h3 className='medium_body_text relative_desc'>Hp 15S AMD Ryzen 3- 5300U 15.6 Inches </h3>
                                            </div>
                                            <div className='relates_item_button'>
                                                <h3 className='large_body_text'>$ 400.00</h3>
                                                <button className='relates_button'>BUY<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                                </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='relative_items'>
                                        <div className='relative_icons'>
                                            <h5 className='relates_discount'>20% off</h5>
                                        </div>
                                        <img src={relatedimg2} className='related_image' alt='error' />
                                        <div className='relates_dots'>
                                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#E57373" />
                                                <circle cx="20" cy="4" r="4" fill="#FFB400" />
                                                <circle cx="36" cy="4" r="4" fill="#EC407A" />
                                                <circle cx="52" cy="4" r="4" fill="#2E1A3E" />
                                            </svg>
                                        </div>
                                        <div className='relates_text'>
                                            <div>
                                                <h3 className='medium_body_text relative_desc'>Samsung Galaxy M12 (Blue, 4GB RAM)</h3>
                                            </div>
                                            <div className='relates_item_button'>
                                                <h3 className='large_body_text'>$ 253.00</h3>
                                                <button className='relates_button'>BUY<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                                </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative_items'>
                                        <div className='relative_icons'>
                                            <h5 className='relates_discount'>20% off</h5>
                                        </div>
                                        <img src={relatedimg3} className='related_image' alt='error' />
                                        <div className='relates_dots'>
                                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#E57373" />
                                                <circle cx="20" cy="4" r="4" fill="#FFB400" />
                                                <circle cx="36" cy="4" r="4" fill="#EC407A" />
                                                <circle cx="52" cy="4" r="4" fill="#2E1A3E" />
                                            </svg>
                                        </div>
                                        <div className='relates_text'>
                                            <div>
                                                <h3 className='medium_body_text relative_desc'>Apple iPhone 13 Pro Max (128GB)</h3>
                                            </div>
                                            <div className='relates_item_button'>
                                                <h3 className='large_body_text'>$ 320.00</h3>
                                                <button className='relates_button'>BUY<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                                </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative_items'>
                                        <div className='relative_icons'>
                                            <h5 className='relates_discount'>20% off</h5>
                                        </div>
                                        <img src={relatedimg4} className='related_image' alt='error' />
                                        <div className='relates_dots'>
                                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#E57373" />
                                                <circle cx="20" cy="4" r="4" fill="#FFB400" />
                                                <circle cx="36" cy="4" r="4" fill="#EC407A" />
                                                <circle cx="52" cy="4" r="4" fill="#2E1A3E" />
                                            </svg>
                                        </div>
                                        <div className='relates_text'>
                                            <div>
                                                <h3 className='medium_body_text relative_desc'>Apple iPhone SE (64 GB) - Midnight</h3>
                                            </div>
                                            <div className='relates_item_button'>
                                                <h3 className='large_body_text'>$ 300.00</h3>
                                                <button className='relates_button'>BUY<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                                </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Relates_item