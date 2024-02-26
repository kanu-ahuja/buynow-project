import '../src/index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/common/Header';
import Home from './pages_router/Home.js';
import Top_deals from './pages_router/top_deals.jsx';
import Hot_offers from './pages_router/hot_offers.jsx';
import Pages from './pages_router/Pages.jsx';
import ThemeContext from './components/context/Themecontext.jsx';
import React, { useLayoutEffect, useState } from 'react'
import Login from './Pages/Login.jsx';
import Guard from './components/Auth/Guard.jsx';
import UserAuth from './Context/auth.js';
import CategoryPage from './Pages/category.jsx';
import Products from './Pages/Products.jsx';
import Productdetail from './Pages/Productdetail.jsx';
import Addtocart from './Pages/addtocart.jsx';
import Dashboard from './Pages/admin/dashboard.jsx';
import ProductsManagement from './Pages/admin/products.jsx';

const App = () => {
  const [theme, setTheme] = useState('light')
  const [session, setSession] = useState(null)

  useLayoutEffect(() => {
    

    let bodyclass = document.querySelector('body').classList;
    if (bodyclass.length === 0) {
      let usepreference = localStorage.getItem('theme');
      let themeMode = (usepreference) ? usepreference : theme;
      bodyclass.add(themeMode)
    }
    // if (bodyclass.contains('dark')) {
    //   bodyclass.remove('dark')
    //   bodyclass.add('light');
    //   localStorage.setItem('theme', 'light')
    //   return
    // }
    // if (bodyclass.contains('light')) {
    //   bodyclass.remove('light')
    //   bodyclass.add('dark');
    //   localStorage.setItem('theme', 'dark')
    //   return
    // }
  }, [theme, setTheme])


  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <UserAuth.Provider value={{session, setSession}}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Guard><Home /></Guard>} />
                <Route path='/top_deals' element={<Guard><Top_deals /></Guard>} />
                <Route path='/hot_offers' element={<Guard><Hot_offers /></Guard>} />
                <Route path='/pages' element={<Guard><Pages /></Guard>} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/category/:slug' element={<CategoryPage />} />
                <Route path='/products/' element={<Products />} />
                <Route path='/addcart/' element={<Addtocart /> } />
                {/* single product  */}
                <Route path='/productdetail/:id' element={<Productdetail />} /> 
                {/* <Route path='/dashboard/users' element={<Guard><Dashboard /></Guard> }/> */}
                {/* <Route path='/dashboard/products' element={<Guard><ProductsManagement /></Guard> }/> */}
              </Route>
            </Routes>
            </UserAuth.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App; 
