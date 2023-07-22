import React from 'react'
import Cart from './Cart'
import { getCategories } from '../../services'
import Head from 'next/head'

const Header = () => {

  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    getCategories().then((res) => {
      if (res?.data) {
        setCategories(res?.data?.data?.categories)
      }
    }).catch(e => console.log(e))
  }, [])

  return (
    <div>
      {categories?.length !== 0 && (
        <>
          <Head>
            <script src='js/mobileMenu.js' />
          </Head>
          <header>
            {/* <!-- Header desktop --> */}
            <div className="container-menu-desktop">
              {/* <!-- Topbar --> */}
              <div className="top-bar">
                <div className="content-topbar flex-sb-m h-full container">
                  <div className="left-top-bar">
                    Free shipping for standard order over $100
                  </div>

                  <div className="right-top-bar flex-w h-full">
                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                      Help & FAQs
                    </a>

                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                      My Account
                    </a>

                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                      EN
                    </a>

                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                      USD
                    </a>
                  </div>
                </div>
              </div>

              <div className="wrap-menu-desktop">
                <nav className="limiter-menu-desktop container">

                  {/* <!-- Logo desktop --> */}
                  <a href="#" className="logo">
                    <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                  </a>

                  {/* <!-- Menu desktop --> */}
                  <div className="menu-desktop">

                    <ul className="main-menu">

                      {
                        categories?.length !== 0 && categories?.map((cate, i) => (
                          <li className={i===0?"active-menu":"menu"} key={i}>
                            <a href="index.html">
                              <img src={cate?.image?.thumbnailUrl} style={{ width: 40, height: 40, borderRadius: 100 }} alt={cate?.name} />
                              <span> {cate?.name}</span>
                            </a>

                            <ul className="sub-menu">
                              {cate?.subcategories?.length !== 0 && cate?.subcategories?.map((sub, k) => (
                                <li key={k}><a href="index.html">
                                  <img src={sub?.image?.thumbnailUrl} style={{ width: 80, height: 70 }} alt={sub?.name} />
                                  <span> {sub?.name}</span>
                                </a></li>
                              ))}
                            </ul>
                          </li>
                        ))
                      }

                      <li className={"menu"}><a>About</a></li>
                      <li className={"menu"}><a>Contact</a></li>

                    </ul>
                  </div>

                  {/* <!-- Icon header --> */}
                  <div className="wrap-icon-header flex-w flex-r-m">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                      <i className="zmdi zmdi-search"></i>
                    </div>

                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                      <i className="zmdi zmdi-shopping-cart"></i>
                    </div>

                    <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                      <i className="zmdi zmdi-favorite-outline"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            {/* <!-- Header Mobile --> */}
            <div className="wrap-header-mobile">
              {/* <!-- Logo moblie --> */}
              <div className="logo-mobile">
                <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
              </div>

              {/* <!-- Icon header --> */}
              <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>

              {/* <!-- Button show menu --> */}
              <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </div>
            </div>


            {/* <!-- Menu Mobile --> */}
            <div className="menu-mobile">
              <ul className="topbar-mobile">
                <li>
                  <div className="left-top-bar">
                    Free shipping for standard order over $100
                  </div>
                </li>

                <li>
                  <div className="right-top-bar flex-w h-full">
                    <a href="#" className="flex-c-m p-lr-10 trans-04">
                      Help & FAQs
                    </a>

                    <a href="#" className="flex-c-m p-lr-10 trans-04">
                      My Account
                    </a>

                    <a href="#" className="flex-c-m p-lr-10 trans-04">
                      EN
                    </a>

                    <a href="#" className="flex-c-m p-lr-10 trans-04">
                      USD
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="main-menu-m">
                {
                  categories?.length !== 0 && categories?.map((cate, i) => (
                    <li key={i} className='mb-3 mt-3' >
                      <a href="index.html">
                        <img src={cate?.image?.thumbnailUrl} style={{ width: 40, height: 40, borderRadius: 100 }} alt={cate?.name} />
                        <span> {cate?.name}</span>
                      </a>
                      <ul className="sub-menu-m">
                        {cate?.subcategories?.length !== 0 && cate?.subcategories?.map((sub, k) => (
                          <li key={k} className='mb-2 mt-2'><a href="index.html">
                            <img src={sub?.image?.thumbnailUrl} style={{ width: 80, height: 70 }} alt={sub?.name} />
                            <span> {sub?.name}</span>
                          </a>
                        
                          </li>
                        ))}
                      </ul>
                      {
                        cate?.subcategories?.length !== 0 && (
                          <span className="arrow-main-menu-m">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        )
                      }
                    </li>
                  ))
                }
                <li className='mb-3 mt-3' ><a>About</a></li>
                <li className='mb-3 mt-3' ><a>Contact</a></li>

              </ul>
            </div>

            {/* <!-- Modal Search --> */}
            <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
              <div className="container-search-header">
                <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                  <img src="images/icons/icon-close2.png" alt="CLOSE" />
                </button>

                <form className="wrap-search-header flex-w p-l-15">
                  <button className="flex-c-m trans-04">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                  <input className="plh3" type="text" name="search" placeholder="Search..." />
                </form>
              </div>
            </div>
          </header>
        </>
      )}

      {/* Cart */}
      <Cart />
    </div>
  )
}

export default Header