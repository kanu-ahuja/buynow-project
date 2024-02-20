import React from 'react'
import Buttoncart from '../Buttons/Buttoncart'

const Featurecard = ({product, xyz}) => {
  return (
    <>
      <div className='features_product_items'>
      <a href={`/productdetail/${product?.id}`}>
          {
            product?.new &&
            <div className='New_icon'>
              <h3 className='new_text'>New</h3>
            </div>
          }
          <div className='features_product_icons'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.929 4.04888C14.929 3.54893 12.929 7.04881 11.929 7.04881C10.929 7.0488 9.59575 3.64158 5.92902 4.04885C2.26229 4.45613 0.929029 8.20934 2.929 12.2094C4.92898 16.2094 8.92901 20.0489 11.929 20.0489C14.929 20.0489 18.929 16.2094 20.929 12.2094C22.929 8.20934 20.929 4.54883 17.929 4.04888Z" stroke="#495F6A" strokeWidth="2" />
            </svg>
          </div>
          <div className='features_product_images' id='color_dooo'>
            {
              product?.type == 'feature' ?  <img src={require(`../../image/${product?.image}`)}  alt='error' className='feature_image'/> :
              <img src={product?.images[0]} className='features_img'  alt='error'/>
            }
          </div>
          <div className='features_product_dots'> 
          </div>
          <div className='features_product_text'>
            <h4 className='small_body_text'>{product.description}</h4>
          </div>

          <div className='features_product_pricebutton'>
            <h2 className='features_product_price'>{product?.price}</h2>
            <div>
              <Buttoncart text='ADD CART' hover={true} />
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default Featurecard