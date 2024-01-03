import React, { Fragment, useEffect } from 'react'
import { useState } from "react";
import img1 from '../image/collection1.png'
import img2 from '../image/collection2.png'
import img3 from '../image/collection3.png'
import img4 from '../image/collection4.png'
import img5 from '../image/women_collection1.png'
import img6 from '../image/womencollection2.png'
import img7 from '../image/womencollection3.png'
import img8 from '../image/womencollection4.png'
import img9 from '../image/smartCollection1.png'
import img10 from '../image/smartCollection2.png'
import img11 from '../image/smartCollection3.png'
import img12 from '../image/smartCollection4.png'
import boywatches1 from '../image/boywatches1.png'
import boywatches2 from '../image/bodywatches2.png'
import boywatches3 from '../image/bodywatches3.png'
import boywatches4 from '../image/bodywatches4.png'
import topbrand1 from '../image/topbrand1.png'
import topbrand2 from '../image/topbrand2.png'
import topbrand3 from '../image/topbrand3.png'
import topbrand4 from '../image/topbrand4.png'
import watches1 from '../image/watches1.png'
import watches2 from '../image/watches2.png'
import watches3 from '../image/watches3.png'
import watches4 from '../image/watches4.png'
import 'swiper/css';
import { v4 as uuidv4 } from "uuid";
const Category_product_collection = () => {

    // New unique id

    const [activeProduct, setActiveProduct] = useState(0);
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
    },[])

    const getCategories = async ()=>{
        let data =  await fetch('https://dummyjson.com/products/categories').then((res)=> res.json()) 
        setCategories(data)  
    }

    return (
        <>
            <section>
                <div className='container'>
                    <div className='category_product_collection'>
                        <div className='category_product_heading'>
                            <h2 className='xl_body_text'>Category products Collections</h2>
                        </div>
                        <div>
                            <ul className='category_product_navbar'>

                                {
                                    categories.length > 0 && categories.map((item, index) => {
                                        return (
                                            <Fragment key={uuidv4()}>
                                                <li className={`header_small_text category_navbar category_links ${index === activeProduct ? 'active' : ''}`} onClick={() => { setActiveProduct(index) }}>
                                                    <a className='' href={`/product/category/${item}`}>{item}</a>
                                                </li>
                                            </Fragment>
                                        )
                                    })
                                }
                                <li className='category_navbar mobile_items'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66732 11.0001C3.66732 10.4938 4.07772 10.0834 4.58398 10.0834H12.4089C13.2998 10.0834 13.746 9.00627 13.116 8.37631L10.3498 5.61009C9.99075 5.25101 9.99178 4.66852 10.3521 4.31071C10.7107 3.95469 11.2896 3.95572 11.6469 4.313L17.6269 10.293C18.0174 10.6835 18.0174 11.3167 17.6269 11.7072L11.6472 17.6869C11.2901 18.044 10.7112 18.0439 10.3541 17.6869C9.99726 17.33 9.997 16.7515 10.3535 16.3944L13.1197 13.6232C13.7488 12.993 13.3025 11.9167 12.412 11.9167H4.58398C4.07772 11.9167 3.66732 11.5063 3.66732 11.0001Z" fill="#495F6A" />
                                    </svg>
                                </li>
                            </ul>
                            <div className='product_border'>
                            </div>
                        </div>


                        <div className='watches_collection'>
                            <div className='watches_collection_headings'>
                                <h3 className='large_body_text'>Men's Watches</h3>
                                <div className='men_watches_collection'>
                                    <div> <img src={img1} alt='error' /> </div>
                                    <div><img src={img2} alt='error' /> </div>
                                    <div> <img src={img3} alt='error' /> </div>
                                    <div> <img src={img4} alt='error' /> </div>

                                </div>
                                <div className='viewall_buttons'>
                                    <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                    </svg>
                                    </button></div>
                            </div>
                            <div>
                                <div className='watches_collection_headings'>
                                    <h3 className='large_body_text'>Woman's Watches</h3>
                                    <div className='men_watches_collection'>
                                        <div> <img src={img5} alt='error' /> </div>
                                        <div><img src={img6} alt='error' /> </div>
                                        <div> <img src={img7} alt='error' /></div>
                                        <div> <img src={img8} alt='error' /> </div>

                                    </div>
                                    <div className='viewall_buttons'>
                                        <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                        </svg>
                                        </button></div>
                                </div>
                            </div>
                            <div>
                                <div className='watches_collection_headings'>
                                    <h3 className='large_body_text'>Smart Watches</h3>
                                    <div className='men_watches_collection'>
                                        <div> <img src={img9} alt='error' /> </div>
                                        <div><img src={img10} alt='error' /> </div>
                                        <div> <img src={img11} alt='error' /> </div>
                                        <div> <img src={img12} alt='error' /> </div>
                                    </div>
                                    <div className='viewall_buttons'>
                                        <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                        </svg>
                                        </button></div>
                                </div>
                            </div>
                            <div>
                                <div className='watches_collection_headings'>
                                    <h3 className='large_body_text'>Boy's Watches</h3>
                                    <div className='men_watches_collection'>
                                        <div> <img src={boywatches1} alt='error' /> </div>
                                        <div><img src={boywatches2} alt='error' /> </div>
                                        <div> <img src={boywatches3} alt='error' /> </div>
                                        <div> <img src={boywatches4} alt='error' /> </div>
                                    </div>
                                    <div className='viewall_buttons'>
                                        <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                        </svg>
                                        </button></div>
                                </div>
                            </div>
                            <div>
                                <div className='watches_collection_headings'>
                                    <h3 className='large_body_text'>Top brands</h3>
                                    <div className='men_watches_collection'>
                                        <div> <img src={topbrand1} alt='error' /> </div>
                                        <div><img src={topbrand2} alt='error' /> </div>
                                        <div> <img src={topbrand3} alt='error' /> </div>
                                        <div> <img src={topbrand4} alt='error' /> </div>
                                    </div>
                                    <div className='viewall_buttons'>
                                        <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                        </svg>
                                        </button></div>
                                </div>
                            </div>
                            <div>
                                <div className='watches_collection_headings'>
                                    <h3 className='large_body_text'>Watches</h3>
                                    <div className='men_watches_collection'>
                                        <div> <img src={watches1} alt='error' /> </div>
                                        <div><img src={watches2} alt='error' /> </div>
                                        <div> <img src={watches3} alt='error' /> </div>
                                        <div> <img src={watches4} alt='error' /> </div>
                                    </div>
                                    <div className='viewall_buttons'>
                                        <button className='primary_button_cta button_viewall'>View all <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67493 5.58782C8.35029 5.26318 7.82393 5.26318 7.49929 5.58782C7.1749 5.91221 7.17461 6.43807 7.49865 6.76282L10.024 9.29366C10.4135 9.68401 10.4135 10.316 10.024 10.7063L7.49865 13.2372C7.17461 13.5619 7.1749 14.0878 7.49929 14.4122C7.82393 14.7368 8.35029 14.7368 8.67493 14.4122L12.38 10.7071C12.7705 10.3166 12.7705 9.68342 12.38 9.29289L8.67493 5.58782Z" fill="#422659" />
                                        </svg>
                                        </button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category_product_collection