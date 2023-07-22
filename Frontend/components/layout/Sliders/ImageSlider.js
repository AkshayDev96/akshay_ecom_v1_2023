import React from 'react'
import ImageGallery from 'react-image-gallery';

const Slide = ({item}) => (
  <div class="item-slick1" style={{ backgroundImage: `url(${item.original})` }}>
    <div class="container h-full">
      <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
        <div class="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
          <span class="ltext-101 cl2 respon2">
            Women Collection 2018
          </span>
        </div>

        <div class="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
          <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
            NEW SEASON
          </h2>
        </div>

        <div class="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
          <a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
)

const images = [
  {
    original: '/images/slide-01.jpg',
    thumbnail: '/images/slide-01.jpg',
    loading: "lazy",
    // renderItem: (item) => <Slide item={item} />
  },
  {
    original: '/images/slide-02.jpg',
    thumbnail: '/images/slide-02.jpg',
    loading: "lazy",
    // renderItem: (item) => <Slide item={item} />
  },
  {
    original: '/images/slide-03.jpg',
    thumbnail: '/images/slide-03.jpg',
    loading: "lazy",
    // renderItem: (item) => <Slide item={item} />
  },
];

const ImageSlider = () => {
  return (
    <ImageGallery slideDuration={1500} onClick={(e) => alert("Go To Shop")} useBrowserFullscreen={true} autoPlay={true} showFullscreenButton={false} lazyLoad={true} showPlayButton={false} infinite={true} showThumbnails={false} items={images} />
  )
}


export default ImageSlider