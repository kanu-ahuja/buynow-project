import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Featurecard from '../components/products/Featurecard';
import { getAllcategory, getProductbyCat } from '../Actions/products';
import arrowdown from '../image/ArrowDown.png'
import Footer from '../components/common/Footer';

const CategoryPage = () => {
    let { slug } = useParams();
    const [products, setProd] = useState([])
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(false)
    const [priceRange, setPriceRange] = useState(0)
    const [range, setrange] = useState(5000)

    useEffect(() => {
        getProductBycat()
        const fetchCatData = async () => setCategories(await getAllcategory()) // init function
        fetchCatData() // calling to function
    }, [])
    
    /* Get All Products */
    const getProductBycat = async (item) => {
        let data = await fetch('https://dummyjson.com/products') 
        .then(res => res.json())
        setProd(data)
    }

    /* Set Loader in All Categories */
    const getProductByCategory = async (cat) => {
        setLoader(true)
        let data = await getProductbyCat(cat);
        setProd(data)
        setLoader(false)
    }

    /* Range */
    const priceFilter = (event) => {
        setrange(event.target.value)
        setPriceRange(event.target.value)
    }

    /* Drop_Down list */
    const [dropdown, setDropdown] = useState(false)
    const arrow = () => {
        setDropdown(prev => !prev)
    }
    let product_color = [
        {
            color : "#1F292D",
        },
        {
            color : "#1976D2",
        },
        {
            color : "#81C784",
        },
        {
            color : "#4DD0E1",
        },
        {
            color : "#4DB6AC",
        },
        {
            color : "#78909C",
        },
        {
            color : "#67517A",
        },  
        {
            color : "#FF8A65",
        },
        {
            color : "#FFB74D",
        },
        {
            color : "#BA68C8",
        },  
        {
            color : "#BE134D",
        },
        {
            color : "#F06292",
        }
    ]
   
    return (
        <>
            <div className="container">
                <div className="top_brands">
                    <h1 className="xl_body_text top_brands_text">{slug}</h1>
                    <div className="top_brands_text top_brands_discount"><h3 className="medium_body_text ">Top brands up to 30% off</h3>
                        <div className="top_brands_arrow">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3327 11C18.3327 10.4937 17.9223 10.0833 17.416 10.0833H9.59107C8.70016 10.0833 8.25399 9.00619 8.88396 8.37623L11.6502 5.61C12.0093 5.25093 12.0082 4.66844 11.6479 4.31063C11.2893 3.95461 10.7104 3.95564 10.3531 4.31292L4.37312 10.2929C3.9826 10.6834 3.9826 11.3166 4.37312 11.7071L10.3528 17.6868C10.7099 18.0439 11.2888 18.0439 11.6459 17.6868C12.0027 17.3299 12.003 16.7515 11.6465 16.3943L8.88027 13.6231C8.25117 12.9929 8.69754 11.9167 9.58801 11.9167H17.416C17.9223 11.9167 18.3327 11.5063 18.3327 11Z" fill="#495F6A"></path></svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66732 11C3.66732 10.4937 4.07772 10.0833 4.58398 10.0833H12.4089C13.2998 10.0833 13.746 9.00619 13.116 8.37623L10.3498 5.61C9.99075 5.25093 9.99178 4.66844 10.3521 4.31063C10.7107 3.95461 11.2896 3.95564 11.6469 4.31292L17.6269 10.2929C18.0174 10.6834 18.0174 11.3166 17.6269 11.7071L11.6472 17.6868C11.2901 18.0439 10.7112 18.0439 10.3541 17.6868C9.99726 17.3299 9.997 16.7515 10.3535 16.3943L13.1197 13.6231C13.7488 12.9929 13.3025 11.9167 12.412 11.9167H4.58398C4.07772 11.9167 3.66732 11.5063 3.66732 11Z" fill="#495F6A"></path></svg>
                        </div>
                    </div>
                    <div className='products_category'>
                        <div className='side_list'>
                            <div className='category_brand'>
                                <h3 className='category_logo'>Filter</h3>
                                <button className='category_button'>Clear all</button>
                            </div>
                            <div className='products_divider'></div>
                            <div className='second_card'>
                                <div className='products_collection'>
                                    <h3 className='product_list'>Category</h3>
                                    <img src={arrowdown} className='arrow' alt='error' id='arrow' onClick={arrow} />
                                </div>
                                {
                                    dropdown && categories.length > 0 && categories.map((item, index) => {
                                        return (<Fragment key={`${item}_category`}>
                                            <a onClick={() => getProductByCategory(item)}>{item}</a>
                                        </Fragment>);
                                    })
                                }
                                <button className='view_button'>View all</button>
                            </div>
                            <div className='products_divider'></div>
                            <div className='price_box'>
                                <div className='products_collection'>
                                    <h3 className='product_list'>Price</h3>
                                    <img src={arrowdown} className='arrow' alt='error' />
                                </div>
                                <div className='range'>
                                    <input
                                        type="range"
                                        id="price"
                                        name="vol"
                                        min="0"
                                        max="5000"
                                        onChange={(e) => priceFilter(e)}
                                    />
                                    ${range}

                                </div>
                                <div className='discount_all'>
                                    <h4 className='discount'>low: $50.00</h4>
                                    <h3 className='discount'>High: $500.00</h3>
                                </div>
                            </div>
                            <div className='products_divider'></div>
                            <div className='all_products'>
                                <div className='products_collection'>
                                    <h3 className='product_list'>Color</h3>
                                    <img src={arrowdown} className='arrow' alt='error' />
                                </div>
                                <div className='color_dots'>
                                  {
                                    product_color.map((item,index)=>{
                                        return(
                                            <div className='color_data' style={{ background: item.color }} ></div>
                                        )
                                    })
                                  }
                                
                                </div>
                                <div>
                                    <h5 className='all_item'>+12 more</h5>
                                </div>
                                <div className='products_divider'>  </div>


                                <div className='brand_container'>
                                    <h4 className='brand_logo'>Brands</h4>
                                    <img src={arrowdown} className='arrow' alt='error' />
                                </div>

                                <div className='products_divider'>  </div>

                                <div className='brand_container'>
                                    <h4 className='brand_logo'>Customer review</h4>
                                    <img src={arrowdown} className='arrow' alt='error' />
                                </div>

                                <div className='products_divider'>  </div>

                                <div className='brand_container'>
                                    <h4 className='brand_logo'>Discount</h4>
                                    <img src={arrowdown} className='arrow' alt='error' />
                                </div>
                            </div>
                        </div>
                        <div className="top_brand_collection category_grid">
                            {loader && <>
                            <div className="ajax___loader">
                                <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <circle cx="50" cy="50" fill="none" stroke="#0a0a0a" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                                    </circle>
                                </svg>
                            </div>
                            </>}
                            {products && products?.products?.filter(item => {
                                if (priceRange === 0) return item;
                                if (item.price < priceRange) return item;
                            }).map((item, index) => {
                                return (<>
                                    <Featurecard product={item} id={item?.id}/>
                                </>)
                            })}

                        </div>
                    </div>
                </div>
            </div>
            {/* <Featurecard> */}
            <Footer />
        </>
    )
}

export default CategoryPage