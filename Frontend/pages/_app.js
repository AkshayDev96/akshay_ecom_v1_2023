import React from 'react'
import './index.css'
import '../public/css/main.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

          {/* <!--===============================================================================================-->	 */}
          <Script strategy='beforeInteractive' src="vendor/jquery/jquery-3.2.1.min.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/animsition/js/animsition.min.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/bootstrap/js/popper.js"></Script>
        <Script strategy='beforeInteractive' src="vendor/bootstrap/js/bootstrap.min.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/select2/select2.min.js"></Script>
        <Script strategy='beforeInteractive' src='js/Script1.js' />
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/daterangepicker/moment.min.js"></Script>
        <Script strategy='beforeInteractive' src="vendor/daterangepicker/daterangepicker.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/slick/slick.min.js"></Script>
        <Script strategy='beforeInteractive' src="js/slick-custom.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/parallax100/parallax100.js"></Script>
        <Script strategy='beforeInteractive' src='js/Script2.js' />
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></Script>
        <Script strategy='beforeInteractive' src='js/Script3.js' />
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/isotope/isotope.pkgd.min.js"></Script>
        {/* <!--===============================================================================================--> */}
        <Script strategy='beforeInteractive' src="vendor/sweetalert/sweetalert.min.js"></Script>
        <Script strategy='beforeInteractive' src='js/Script4.js' />
        {/* <!--===============================================================================================--> */}
	      <Script strategy='beforeInteractive' src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></Script>
        <Script strategy='beforeInteractive' src='js/Script5.js' />

      <Script strategy='beforeInteractive' src='js/main.js' />
      
    </>
  )
}

export default MyApp