import React, { Fragment } from 'react'

import Buttoncart from '../components/Buttons/Buttoncart'
import Featurecard from '../components/products/Featurecard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { v4 as uuidv4 } from "uuid";


// Import Swiper styles
import 'swiper/css';



const Features_product = () => {


  let product = [
    {
      id: uuidv4(),
      title: "Product 1",
      price: "$300.00",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo",
      image: "featuresProduct1.png",
      icon: "color.svg",

    },
    {
      id: uuidv4(),
      title: "Product 2",
      price: "$253.00",
      desc: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
      image: "featuresProduct2.png",
      icon: "color.svg",
    },
    {
      id: uuidv4(),
      title: "Product 3",
      price: "$320.00",
      desc: "Apple iPhone 13 Pro Max (128GB,35hrs)",
      image: "featuresProduct3.png",
      icon: "color.svg",

    },
    {
      id: uuidv4(),
      title: "Product 4",
      price: "$400.00",
      desc: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches",
      image: "featuresProduct4.png",
      icon: "color.svg",
    }
  ]

  // New unique id

  //   const [products, setProducts] = useState([])

  //   useEffect(()=>{

  //     console.log('dom paint end')

  //     getProduct().then(res => setProducts(res))
  //   },[])


  //   useLayoutEffect(()=>{
  //     console.log('dom paint start')

  //   })

  //   const getProduct = () => new Promise((resolve,reject)=>{
  //       fetch('https://fakestoreapi.com/products')
  //       .then(res=>res.json())
  //       .then(result=> resolve(result))
  //       .catch(err=> reject(err))
  //   })

  return (
    <section>
      <div className='container'>
        <div className='features_product'>
          <h2 className='xl_body_text'>Featured products for you</h2>
          <div className='features_product_arrow mobile_Screen'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3327 11C18.3327 10.4937 17.9223 10.0833 17.416 10.0833H9.59107C8.70016 10.0833 8.25399 9.00615 8.88396 8.37619L11.6502 5.60996C12.0093 5.25089 12.0082 4.6684 11.6479 4.31059C11.2893 3.95457 10.7104 3.9556 10.3531 4.31288L4.37312 10.2929C3.9826 10.6834 3.9826 11.3165 4.37312 11.7071L10.3528 17.6868C10.7099 18.0438 11.2888 18.0438 11.6459 17.6868C12.0027 17.3299 12.003 16.7514 11.6465 16.3943L8.88027 13.6231C8.25117 12.9929 8.69754 11.9166 9.58801 11.9166H17.416C17.9223 11.9166 18.3327 11.5062 18.3327 11Z" fill="#495F6A" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66732 11C3.66732 10.4937 4.07772 10.0833 4.58398 10.0833H12.4089C13.2998 10.0833 13.746 9.00615 13.116 8.37619L10.3498 5.60996C9.99075 5.25089 9.99178 4.6684 10.3521 4.31059C10.7107 3.95457 11.2896 3.9556 11.6469 4.31288L17.6269 10.2929C18.0174 10.6834 18.0174 11.3165 17.6269 11.7071L11.6472 17.6868C11.2901 18.0438 10.7112 18.0438 10.3541 17.6868C9.99726 17.3299 9.997 16.7514 10.3535 16.3943L13.1197 13.6231C13.7488 12.9929 13.3025 11.9166 12.412 11.9166H4.58398C4.07772 11.9166 3.66732 11.5062 3.66732 11Z" fill="#495F6A" />
            </svg>
          </div>
        </div>
        <div className='features_product_collection'>
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
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              product.length > 0 && product.map((item, index) => {
                return (<Fragment key={`${item.id}_product`}>
                  <SwiperSlide> <Featurecard product={item} xyz={item.id} /> </SwiperSlide>
                </Fragment>);
              })
            }
          </Swiper>
        </div>
        <div className='featues_product_button'>
          <Buttoncart text='View all Products' />
        </div>
      </div>
    </section>
  )
}

export default Features_product