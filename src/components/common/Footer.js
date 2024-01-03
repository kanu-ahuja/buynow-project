import React from 'react'
import newletter from '../../image/newsletter1.png'
import footericon from '../../image/footericon.png'
import dowload1 from '../../image/DownloadButton1.png'
import dowload2 from '../../image/DownloadButton2.png'


const Footer = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='subscribe_to_newsletter'>
            <div className='newletter_text'>
              <img src={newletter} className='newletter_image' />

              <div>
                <h1 className='xl_body_text subscribe_text'>Subscribe to our newsletter</h1>
                <div className='newletter_discount'>
                  <h4 className='medium_body_text'>Get 10% discount</h4>
                  <div className='new_letter_email'>
                    <div className='newletter_email'>
                      <input type='email' placeholder='Enter your email...' />
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.5L3 20V15.5L21 12.5ZM21 12.5L3 9.5V5L21 12.5Z" stroke="#574B9B" strokeOpacity="0.54" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='footer'>
          <div className='container'>
            <div className='footer_section'>
              <div className='footer_brand'>
                <div className='footer_about'>
                  <h3 className='footer_lg_text'>About</h3>
                  <img src={footericon} className='footer_icon' />
                </div>
                <div>
                  <p className='footer_small_text footer_Big_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit sem tortor dui mattis vulputate fermentum. Turpis nisi, nulla interdum luctus.</p>
                </div>
                <div className='email_location'>
                  <div className='footer_email'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 3.61011H2.5C2.16848 3.61011 1.85054 3.7418 1.61612 3.97622C1.3817 4.21064 1.25 4.52859 1.25 4.86011V14.8601C1.25 15.1916 1.3817 15.5096 1.61612 15.744C1.85054 15.9784 2.16848 16.1101 2.5 16.1101H17.5C17.8315 16.1101 18.1495 15.9784 18.3839 15.744C18.6183 15.5096 18.75 15.1916 18.75 14.8601V4.86011C18.75 4.52859 18.6183 4.21064 18.3839 3.97622C18.1495 3.7418 17.8315 3.61011 17.5 3.61011ZM16.125 4.86011L10 9.09761L3.875 4.86011H16.125ZM2.5 14.8601V5.42886L9.64375 10.3726C9.74837 10.4452 9.87267 10.4841 10 10.4841C10.1273 10.4841 10.2516 10.4452 10.3562 10.3726L17.5 5.42886V14.8601H2.5Z" fill="white" />
                    </svg>
                    <h3 className='footer_medium_text'>debra.holt@example.com</h3>

                  </div>
                  <div>
                    <h5 className='footer_line'></h5>
                  </div>
                  <div className='footer_email'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11.25C9.38194 11.25 8.77776 11.0667 8.26385 10.7233C7.74995 10.38 7.34941 9.8919 7.11288 9.32088C6.87636 8.74987 6.81448 8.12153 6.93505 7.51534C7.05563 6.90915 7.35326 6.35233 7.7903 5.91529C8.22734 5.47825 8.78416 5.18062 9.39035 5.06004C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5984 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.1241 8.95351 12.7945 9.74782 12.2087 10.3337C11.6228 10.9195 10.8285 11.2491 10 11.25ZM10 6.25C9.62917 6.25 9.26666 6.35997 8.95831 6.56599C8.64997 6.77202 8.40965 7.06486 8.26773 7.40747C8.12582 7.75008 8.08869 8.12708 8.16104 8.49079C8.23338 8.85451 8.41196 9.1886 8.67418 9.45082C8.93641 9.71305 9.2705 9.89162 9.63421 9.96397C9.99793 10.0363 10.3749 9.99919 10.7175 9.85727C11.0602 9.71536 11.353 9.47504 11.559 9.16669C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62789 11.6767 7.15129 11.3252 6.79978C10.9737 6.44826 10.4971 6.25055 10 6.25Z" fill="white" />
                      <path d="M10 18.75L4.72782 12.5321C4.69788 12.4964 4.51019 12.2499 4.51019 12.2499C3.60951 11.0636 3.1229 9.6145 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61389 16.391 11.0624 15.4908 12.2483L15.4898 12.2499C15.4898 12.2499 15.3023 12.4964 15.2744 12.5295L10 18.75ZM5.50782 11.4969C5.50844 11.4973 5.65369 11.6895 5.68694 11.7309L10 16.8174L14.3188 11.7237C14.3462 11.6892 14.4927 11.4956 14.493 11.4951C15.2288 10.5258 15.6264 9.34195 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.37362 9.34261 4.77156 10.5271 5.50782 11.4969Z" fill="white" />
                    </svg>
                    <h4 className='footer_medium_text footer_location'>6391 Elgin St. Celina, Delaware 10299</h4>
                  </div>
                </div>
                <div>
                  <h4 className='footer_small_text dowload_text'>Download the app</h4>
                  <div className='download_app_images'>
                    <img src={dowload1} className='download_image' />
                    <img src={dowload2} className='download_image' />
                  </div>
                </div>
              </div>
              <div className='footer_right'>
                <div className='footer_collection'>
                  <div className='footer_items'>
                    <h1 className='footer_lg_text'>Customer support</h1>
                    <ul className='footer_links'>
                      <li>
                        <a href='#' className='footer_medium_text footer_hover'>Contact us</a>
                      </li>
                      <li>
                        <a href='#' className='footer_medium_text footer_hover'>Help center</a>
                      </li>
                      <li>
                        <a href='#' className='footer_medium_text footer_hover'>Exchanges</a>
                      </li>

                      <li>
                        <a href='#' className='footer_medium_text footer_hover'>Credit cards</a>
                      </li>

                      <li>
                        <a href='#' className='footer_medium_text footer_hover'>Debit cards</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='footer_items'>
                      <h1 className='footer_lg_text'>Contact with us</h1>
                      <ul className='footer_links'>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Facebook</a>
                        </li>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Instagram</a>
                        </li>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Twitter</a>
                        </li>

                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Linkedin</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className='footer_items'>
                      <h1 className='footer_lg_text'>About</h1>
                      <ul className='footer_links'>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Careers</a>
                        </li>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>About us</a>
                        </li>
                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>Blogs</a>
                        </li>

                        <li>
                          <a href='#' className='footer_medium_text footer_hover'>News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='footer_line'></div>
                <div>
                  <ul className='footer_last'>
                    <li className='small_body_text footer_last_text'>© 2021. All rights reserved</li>
                    <li className='small_body_text footer_last_text footer_hover'>Help Center</li>
                    <li className='small_body_text footer_last_text footer_hover'>Terms of Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer