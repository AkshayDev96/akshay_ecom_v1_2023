import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { numberWithCommas } from '../../helpers';


const ViewProductModal = ({ data, open ,toggle}) => {

    const images = [
        {
            original: '/images/product-01.jpg',
            thumbnail: '/images/product-01.jpg',
            loading: "lazy",
        },
        {
            original: '/images/product-02.jpg',
            thumbnail: '/images/product-02.jpg',
            loading: "lazy",
        },
        {
            original: '/images/product-02.jpg',
            thumbnail: '/images/product-02.jpg',
            loading: "lazy",
        },
    ];


    const parseImageData = d =>{
       return d?.length>0?d?.map((image)=>({original:image?.url,thumbnail:image?.thumbnailUrl,loading:'lazy'})):null
    }



    return (
        <Modal open={open} onClose={toggle} center>
            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <img src="images/icons/icon-close.png" alt="CLOSE" />
                    </button>

                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <ImageGallery useBrowserFullscreen={true} autoPlay={true} showFullscreenButton={true} lazyLoad={true} showPlayButton={false} infinite={true} showThumbnails={true} items={parseImageData(data?.image)} />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {data?.name}
                                </h4>

                                <span className="mtext-106 cl2">
                                 ₹{numberWithCommas(data?.price)}
                                </span>

                                <p className="stext-102 cl3 p-t-23">
                                    {data?.description}
                                </p>

                                {/* <!--  --> */}
                                <div className="p-t-33">
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">
                                            Size
                                        </div>

                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="js-select2" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Size S</option>
                                                    <option>Size M</option>
                                                    <option>Size L</option>
                                                    <option>Size XL</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">
                                            Color
                                        </div>

                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="js-select2" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>White</option>
                                                    <option>Grey</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                                </div>

                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue="1" />

                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                                </div>
                                            </div>

                                            <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--  --> */}
                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                            <i className="zmdi zmdi-favorite"></i>
                                        </a>
                                    </div>

                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )

    //   return (
    //     <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
    //     <div className="overlay-modal1 js-hide-modal1"></div>


    // </div>
    //   )
}

export default ViewProductModal