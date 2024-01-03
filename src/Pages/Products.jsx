import React, { useEffect, useState } from 'react'
import Featurecard from '../components/products/Featurecard';


const Products = () => {

    const [products, setProd] = useState([])

    useEffect(() => {
        getProductBycat()
    }, [])

    const getProductBycat = async () => {
        let data = await fetch('http://localhost:9000/getProduct')
            .then(res => res.json())
        setProd(data.products)
    }

    return (
        <>
            <div className="container">
                <div className="top_brands">
                    <div className="top_brands_text top_brands_discount"><h3 className="medium_body_text ">Top brands up to 30% off fdgdf</h3>
                        <div className="top_brands_arrow">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3327 11C18.3327 10.4937 17.9223 10.0833 17.416 10.0833H9.59107C8.70016 10.0833 8.25399 9.00619 8.88396 8.37623L11.6502 5.61C12.0093 5.25093 12.0082 4.66844 11.6479 4.31063C11.2893 3.95461 10.7104 3.95564 10.3531 4.31292L4.37312 10.2929C3.9826 10.6834 3.9826 11.3166 4.37312 11.7071L10.3528 17.6868C10.7099 18.0439 11.2888 18.0439 11.6459 17.6868C12.0027 17.3299 12.003 16.7515 11.6465 16.3943L8.88027 13.6231C8.25117 12.9929 8.69754 11.9167 9.58801 11.9167H17.416C17.9223 11.9167 18.3327 11.5063 18.3327 11Z" fill="#495F6A"></path></svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66732 11C3.66732 10.4937 4.07772 10.0833 4.58398 10.0833H12.4089C13.2998 10.0833 13.746 9.00619 13.116 8.37623L10.3498 5.61C9.99075 5.25093 9.99178 4.66844 10.3521 4.31063C10.7107 3.95461 11.2896 3.95564 11.6469 4.31292L17.6269 10.2929C18.0174 10.6834 18.0174 11.3166 17.6269 11.7071L11.6472 17.6868C11.2901 18.0439 10.7112 18.0439 10.3541 17.6868C9.99726 17.3299 9.997 16.7515 10.3535 16.3943L13.1197 13.6231C13.7488 12.9929 13.3025 11.9167 12.412 11.9167H4.58398C4.07772 11.9167 3.66732 11.5063 3.66732 11Z" fill="#495F6A"></path></svg>
                        </div>

                    </div>
                    <div className="top_brand_collection">

                    {products && products.map((item, index) => {
                        return (<>
                            <Featurecard product={item} id={item?.id} />
                        </>)
                    })}

                </div></div></div>
            {/* <Featurecard> */}
        </>
    )
}

export default Products