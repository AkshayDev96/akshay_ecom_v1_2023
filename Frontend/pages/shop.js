import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ShopUi from '../components/layout/shop/shopUi'
import Products from '../components/layout/Products'
import queryString from 'query-string';
import { getProducts } from '../services'




const Shop = (props) => {

  return (
    <>
      <Header />
      <Products query={props?.query} products={props?.products} />
      <Footer />
    </>
  )
}

export const getServerSideProps = async (con) => {
  try {
    const q = queryString.stringify(con.query)
    const res = await getProducts(`?${q}`)
    if(res){
      return {props:{products:res?.data?.data?.details,query:q}}
    }else{
      return {props:{products:[],query:q}}
    }
  }catch(e){
    return {props:{products:[],query:q}}
  }

}

export default Shop

