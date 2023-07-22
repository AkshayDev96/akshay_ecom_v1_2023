import React from 'react'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/images/product-01.jpg',
      thumbnail: '/images/product-01.jpg',
      loading:"lazy",
    },
    {
      original: '/images/product-02.jpg',
      thumbnail: '/images/product-02.jpg',
      loading:"lazy",
    },
    {
      original: '/images/product-02.jpg',
      thumbnail: '/images/product-02.jpg',
      loading:"lazy",
    },
  ];

const ImageSlider = ({data}) => {
  console.log(data)
  return (
    <ImageGallery onClick={(e)=>alert("Go To Shop")} useBrowserFullscreen={true} autoPlay={true} showFullscreenButton={false} lazyLoad={true} showPlayButton={false} infinite={true} showThumbnails={false} items={images} />
  )
}


export default ImageSlider