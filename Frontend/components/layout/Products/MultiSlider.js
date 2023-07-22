import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Slides = (props) => {
    const {items,infinite} = props

    return (
        items?<Carousel
       ssr={false}
       infinite={infinite}
       swipeable={true}
       draggable={true}
        responsive={responsive}
        autoPlaySpeed={5000}
        // customTransition="all .5"
        transitionDuration={500}
        autoPlay={props.deviceType !== "mobile" ? true : true}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        // arrows={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
      {items}

      </Carousel>:null
    )
}

export default Slides