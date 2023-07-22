import React from 'react'
import ProductView from './ProductView'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MultiSlider from './MultiSlider'
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getCategoryProducts } from '../../../services';

const Home_Featured_Products = () => {

  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    getCategoryProducts("?category_limit=3&product_limit=10&featured=true").then((res) => {
      if (res?.data) {
        setCategories(res?.data?.data?.details)
      }
    }).catch(e => console.log(e))
  }, [])

  // const products = [1, 2, 3, 4, 5];

  const items =products=> products.length > 0 ? products.map((product, i) => {
    return <ProductView key={i} data={product} />
  }) : null
  const hrStyle = {borderTop:"1px solid #aaa",marginTop:10}
  return (
    <section class="bg0 p-t-23 p-b-140">
        {categories?.length !== 0 && categories?.map((cat, i) => (
          <div class="container" key={i}>
            <div class="p-b-10">
              <h3 class="ltext-103 cl5 text-center">
                {cat?.name}
              </h3>
            </div>
            <MultiSlider infinite={true} items={items(cat?.products)} />
            <hr style={hrStyle}/>
          </div>
        ))}
    </section>
  )
}

export default Home_Featured_Products