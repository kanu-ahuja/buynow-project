import React, { useContext } from 'react'
import img1 from '../../image/india.png'
import mobiletoggle from '../../image/mobile_toggle.png'
import { Outlet, Link } from "react-router-dom";
import ThemeContext from '../context/Themecontext';
import UserAuth from '../../Context/auth';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigation = useNavigate()
  const { setTheme } = useContext(ThemeContext)
  const { session, setSession } = useContext(UserAuth)

  const logout = ()=> {
    setSession(null)
    localStorage.clear("session")
    navigation('/login')
  }

  return (
    <>
      <header>
        {/* Annoucement_Bar Section Start */}

        <div className='annoucement_bar'>
          <div className='container'>
            <div className='annoucement_bar_logo'>
              <div className='annucement_bar_start'>

                <svg className='mobile_items' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.9" d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM4 14V13C4 11.9 4.9 11 6 11H8V14H4ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" fill="white" />
                  <path opacity="0.9" d="M10 6H5V8H10V6Z" fill="white" />
                  <path opacity="0.9" d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z" fill="white" />
                </svg>
                <div>
                  <ul>
                    <li>
                      <Link to='#' className='annoucement_bar_link'>Free delivery on $100.00 </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul className='annoucement_bar_links'>
                  <li>
                    <Link to='#' className='annoucement_bar_link'>Help center</Link>
                  </li>
                  <li>
                    <Link to='#' className='annoucement_bar_link mobile_items'>Returns policy</Link>
                  </li>
                  <li>
                    <Link to='#' className='annoucement_bar_link mobile_items'>Support</Link>
                  </li>
                  <li>
                    <Link to='#' className='annoucement_bar_link mobile_items'>(+00) 0123456789</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Annoucement_Bar Section End */}

        {/* Header Section Start */}

        <div className='container'>
          <div className='navbar'>
            <div className='navbar_logo'>
              <div className='navbar_logo_Start'>
                <div className='navbar_brand'>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_26_273)">
                      <path opacity="0.9" d="M18.8992 5.43708C18.7613 5.24973 18.5232 5.16465 18.2981 5.22266C17.7223 5.3709 16.6154 5.78426 15.799 6.87524C15.2082 7.66543 13.9582 7.11157 14.1443 6.14262C14.2285 5.70305 14.3939 5.21407 14.6728 4.67696C15.9657 2.18735 13.9853 0.284693 13.8439 0.153639C13.8384 0.148482 13.8328 0.144186 13.8263 0.139459C13.7602 0.0943418 13.361 -0.154447 12.9884 0.146334C12.9064 0.212506 10.9315 1.7654 8.93176 4.15661C6.77086 6.74075 4.81836 10.0248 4.81836 13.4061C4.81836 18.1447 8.67352 21.9994 13.4117 21.9994C18.1498 21.9994 22.005 18.1442 22.005 13.4061C22.005 10.5568 20.618 7.77801 18.8979 5.43708H18.8992Z" fill="#422659" />
                      <path opacity="0.9" d="M6.03129 4.14062H2.19805C1.61189 4.14062 1.13672 4.6158 1.13672 5.20195C1.13672 5.78811 1.61189 6.26328 2.19805 6.26328H6.03129C6.61744 6.26328 7.09262 5.78811 7.09262 5.20195C7.09262 4.6158 6.61744 4.14062 6.03129 4.14062Z" fill="#422659" />
                      <path opacity="0.9" d="M3.75746 8.38281H1.06719C0.481032 8.38281 0.00585938 8.85799 0.00585938 9.44414C0.00585938 10.0303 0.481032 10.5055 1.06719 10.5055H3.75746C4.34362 10.5055 4.81879 10.0303 4.81879 9.44414C4.81879 8.85799 4.34362 8.38281 3.75746 8.38281Z" fill="#422659" />
                      <path opacity="0.9" d="M3.22242 12.6289H2.84258C2.25642 12.6289 1.78125 13.1041 1.78125 13.6902C1.78125 14.2764 2.25642 14.7516 2.84258 14.7516H3.22242C3.80858 14.7516 4.28375 14.2764 4.28375 13.6902C4.28375 13.1041 3.80858 12.6289 3.22242 12.6289Z" fill="#422659" />
                      <path opacity="0.9" d="M4.37602 16.8594H1.47734C0.891188 16.8594 0.416016 17.3345 0.416016 17.9207C0.416016 18.5069 0.891188 18.982 1.47734 18.982H4.37602C4.96217 18.982 5.43734 18.5069 5.43734 17.9207C5.43734 17.3345 4.96217 16.8594 4.37602 16.8594Z" fill="#422659" />
                      <path opacity="0.9" d="M19.466 6.24489C19.2821 5.97032 19.093 5.7009 18.8992 5.43708C18.7613 5.24973 18.5232 5.16465 18.2981 5.22266C17.7223 5.3709 16.6154 5.78426 15.799 6.87524C15.2082 7.66544 13.9582 7.11157 14.1443 6.14262C14.2285 5.70305 14.3939 5.21407 14.6728 4.67696C15.9657 2.18735 13.9853 0.284693 13.8439 0.153639C13.8384 0.148482 13.8328 0.144186 13.8263 0.139459C13.7602 0.0943418 13.361 -0.154447 12.9884 0.146334C12.9064 0.212506 10.9315 1.7654 8.93176 4.15661C6.77086 6.74075 4.81836 10.0248 4.81836 13.4061C4.81836 14.6917 5.10281 15.912 5.61113 17.0086C6.26297 17.1194 6.93285 17.1774 7.61605 17.1774C13.8598 17.1774 18.9787 12.3636 19.4651 6.24489H19.466Z" fill="#422659" />
                      <path opacity="0.9" d="M13.4239 18.9963C10.7229 18.9963 8.5332 16.8066 8.5332 14.1055C8.5332 11.4045 10.7229 9.21484 13.4239 9.21484C16.1249 9.21484 18.3146 11.4045 18.3146 14.1055C18.3146 16.8066 16.1249 18.9963 13.4239 18.9963Z" fill="white" />
                      <path opacity="0.9" d="M15.3618 13.6585H13.9086V11.1135C13.9086 10.7921 13.6482 10.5312 13.3264 10.5312C13.0045 10.5312 12.7441 10.7916 12.7441 11.1135V14.2407C12.7441 14.5621 13.0045 14.823 13.3264 14.823H15.3618C15.6832 14.823 15.944 14.5626 15.944 14.2407C15.944 13.9189 15.6836 13.6585 15.3618 13.6585Z" fill="#422659" />
                    </g>
                    <defs>
                      <clipPath id="clip0_26_273">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <h5 className='header_lg_text'>Buynow</h5>
                  </div>
                </div>
                <div>
                  <ul className='header_links'>
                    <li>
                      <Link to='/' className='header_medium_text header_links_text mobile_items'>Home</Link>
                    </li>
                    <li>
                      <Link to='/top_deals' className='header_medium_text header_links_text mobile_items'>Top Deals</Link>
                    </li>
                    <li>
                      <Link to='/hot_offers' className='header_medium_text header_links_text mobile_items'>Hot Offers</Link>
                    </li>
                    <li>
                      <Link to='/pages' className='header_medium_text header_links_text mobile_items'>Pages</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='header_end'>
                <div className='header_search'>
                  <div className='header_Search_box mobile_items'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5445 11.0222C16.5445 14.0721 14.0721 16.5445 11.0222 16.5445C7.97238 16.5445 5.5 14.0721 5.5 11.0222C5.5 7.97238 7.97238 5.5 11.0222 5.5C14.0721 5.5 16.5445 7.97238 16.5445 11.0222ZM15.5848 17.0033C14.3192 17.9701 12.7378 18.5445 11.0222 18.5445C6.86782 18.5445 3.5 15.1766 3.5 11.0222C3.5 6.86782 6.86782 3.5 11.0222 3.5C15.1766 3.5 18.5445 6.86782 18.5445 11.0222C18.5445 12.7379 17.9701 14.3193 17.0032 15.5849L20.2083 18.79C20.5988 19.1805 20.5967 19.8158 20.2062 20.2063C19.8157 20.5968 19.1804 20.5989 18.7899 20.2084L15.5848 17.0033Z" fill="#574B9B" fillOpacity="0.54" />
                    </svg>
                    <input type='search' placeholder='Search' className='mobile_items mobile_items_mobile' ></input>
                    <div className='header_search_button mobile_items mobile_items_mobile'>
                      <h5 className='header_small_text'>All</h5>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.9" d="M14.4122 7.49978C14.0878 7.17538 13.5619 7.1751 13.2372 7.49914L10.7063 10.0245C10.316 10.414 9.68401 10.414 9.29366 10.0245L6.76282 7.49914C6.43807 7.1751 5.91221 7.17538 5.58782 7.49978C5.26318 7.82442 5.26318 8.35077 5.58782 8.67542L9.29289 12.3805C9.68342 12.771 10.3166 12.771 10.7071 12.3805L14.4122 8.67542C14.7368 8.35077 14.7368 7.82442 14.4122 7.49978Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='search_icon '>

                  <img src={mobiletoggle} alt='error' />
                </div>


                <div className='mobile_items '>
                  <img src={img1} alt='error' className='drop_down' />
                  <select className='drop_down_list'>
                    <option></option>
                    <option>India</option>
                    <option>Russia</option>
                    <option>Germany</option>
                    <option>Malaysia</option>
                    <option>Japan</option>
                  </select>
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.9" d="M9.41421 9.5C8.52331 9.5 8.07714 10.5771 8.70711 11.2071L11.2929 13.7929C11.6834 14.1834 12.3166 14.1834 12.7071 13.7929L15.2929 11.2071C15.9229 10.5771 15.4767 9.5 14.5858 9.5H9.41421Z" fill="#495F6A" />
                  </svg> */}
                </div>
                <div>
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM19 20H5V8H19V20ZM12 12C10.34 12 9 10.66 9 9H7C7 11.76 9.24 14 12 14C14.76 14 17 11.76 17 9H15C15 10.66 13.66 12 12 12Z" fill="#495F6A" />
                    <g clipPath="url(#clip0_36_358)">
                      <circle cx="28" cy="4" r="4" fill="#FFB900" />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_358">
                        <rect width="8" height="8" fill="white" transform="translate(24)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='mobile_items header_icons_end'>
                <Link to="/login"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 15.9C23.16 15.9 24.1 16.84 24.1 18C24.1 19.16 23.16 20.1 22 20.1C20.84 20.1 19.9 19.16 19.9 18C19.9 16.84 20.84 15.9 22 15.9ZM22 24.9C24.97 24.9 28.1 26.36 28.1 27V27.1C28.1 27.6523 27.6523 28.1 27.1 28.1H16.9C16.3477 28.1 15.9 27.6523 15.9 27.1V27C15.9 26.36 19.03 24.9 22 24.9ZM22 14C19.79 14 18 15.79 18 18C18 20.21 19.79 22 22 22C24.21 22 26 20.21 26 18C26 15.79 24.21 14 22 14ZM22 23C19.33 23 14 24.34 14 27V29C14 29.5523 14.4477 30 15 30H29C29.5523 30 30 29.5523 30 29V27C30 24.34 24.67 23 22 23Z" fill="#495F6A" />
                  </svg></Link>
                </div>
                <div className='desktop_screen'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 22.5C13 23.0523 13.4477 23.5 14 23.5H25C25.5523 23.5 26 23.0523 26 22.5C26 21.9477 25.5523 21.5 25 21.5H14C13.4477 21.5 13 21.9477 13 22.5ZM7 8.5C6.44772 8.5 6 8.94772 6 9.5C6 10.0523 6.44772 10.5 7 10.5H25C25.5523 10.5 26 10.0523 26 9.5C26 8.94772 25.5523 8.5 25 8.5H7ZM15 16.5C15 17.0523 15.4477 17.5 16 17.5H25C25.5523 17.5 26 17.0523 26 16.5C26 15.9477 25.5523 15.5 25 15.5H16C15.4477 15.5 15 15.9477 15 16.5Z" fill="#495F6A" />
                    <rect x="11" y="15.5" width="2" height="2" rx="1" fill="#495F6A" />
                  </svg>
                  
                </div>


                {/* <button className="button_img"
                  onClick={() => {
                    setTheme(rev => (rev === 'light') ? 'dark' : 'light')
                  }}
                ></button> */}

                {session && <button className="logout" onClick={logout}></button>}

              </div>
            </div>
          </div>
        </div>

        {/* Header Section End */}
      </header>
      <Outlet />
    </>
  )
}

export default Header
