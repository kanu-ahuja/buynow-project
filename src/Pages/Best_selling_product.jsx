import React from 'react'
import bestselling1 from '../image/bestSelling1.png'
import bestselling2 from '../image/bestSelling2.png'
import bestselling3 from '../image/bestSelling3.png'
import stars from '../image/BestSellingstars.png'
import Buttoncart from '../components/Buttons/Buttoncart'

const Best_selling_product = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='best_selling'>
                        <div className='best_selling_product'>
                            <h2 className='xl_body_text'>Best selling products</h2>
                        </div>
                        <div className='best_selling_collection'>
                            <div className='best_selling_items'>
                                <img src={bestselling1} className='best_seller_image' alt='error' />
                                <div className='selling_items'>
                                    <div className='selling_text'>
                                        <h3 className='large_body_text best_seller_text'>Bluetooth watches</h3>
                                        <img src={stars} className='best_selling_image' alt='error' />
                                        <h2 className='exlarge_body_text best_selling_text'>$ 150.00</h2>
                                        <div className='best_selling_buttons'>
                                            <button className='primary_button_cta'>BUY</button>
                                            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='best_selling_items'>
                                <img src={bestselling2} className='best_seller_image' alt='error' />
                                <div className='selling_items'>
                                    <div className='selling_text'>
                                        <h3 className='large_body_text best_seller_text'>Bluetooth watches</h3>
                                        <img src={stars} className='best_selling_image' alt='error' />
                                        <h2 className='exlarge_body_text best_selling_text'>$ 80.00</h2>
                                        <div className='best_selling_buttons'>
                                            <button className='primary_button_cta'>BUY</button>
                                            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='best_selling_items'>
                                <img src={bestselling3} className='best_seller_image' alt='error' />
                                <div className='selling_items'>
                                    <div className='selling_text'>
                                        <h3 className='large_body_text best_seller_text'>Bluetooth watches</h3>
                                        <img src={stars} className='best_selling_image' alt='error' />
                                        <h2 className='exlarge_body_text best_selling_text'>$ 120.00</h2>
                                        <div className='best_selling_buttons'>
                                            <button className='primary_button_cta'>BUY</button>
                                            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='best_seller_image'>
                                    <div className='seller_all_texts'>
                                <div className='best_seller_texts'>
                                    <h3 className='large_body_text seller_text'>Product for you</h3>
                                    <h4 className='small_body_text seller_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla nunc aenean ac donec lectus in vel.</h4>

                                </div>
                                <div className='best_selling_button'>
                                    <Buttoncart text='VIEW ALL' />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Best_selling_product