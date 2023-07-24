import React from 'react'
import { getCategories, getProducts } from '../../services'
import Link from 'next/link'
import Head from 'next/head'
import queryString from 'query-string';
import Router, { withRouter } from 'next/router';
import ProductView from './Products/ProductView';

const activeStyle = {
    background: "#717fe0",
    color: "#fff",
    padding: 4,
    borderRadius: 5
}



const Products = ({query:query2,products}) => {

    const [categories, setCategories] = React.useState([])
    const [subcategories, setSubCategories] = React.useState([])
    const params = queryString.parse(query2);
    const [subcategorySelected, setSubCategory] = React.useState(params["subcategory"] ? params["subcategory"] : "")
    const [categorySelected, setCategory] = React.useState(params["category"] ? params["category"] : "")
    // const [products, setProducts] = React.useState([])


    React.useEffect(() => {
        getCategories().then((res) => {
            if (res?.data) {
                setCategories(res?.data?.data?.categories)
            }
        }).catch(e => console.log(e))
    }, [])

    React.useEffect(() => {
        let query = {}
        if (categorySelected) {
            query.category = categorySelected
        }
        if (subcategorySelected) {
            query.subcategory = subcategorySelected
        }
        const stringified = queryString.stringify(query);
        Router.push(`/shop?${stringified}`)
    }, [subcategorySelected, categorySelected])

    return (
        <div class="bg0 m-t-50 p-b-200" style={{ marginTop: 90 }}>
            {
                categories?.length !== 0 ? (
                    <Head>
                        <script src='js/filter.js' />
                    </Head>
                ) : null
            }
            {
                products?.length !== 0 ? (
                    <Head>
                        <script src='js/main.js' />
                    </Head>
                ) : null
            }
            <div class="container">
                <div class="p-b-10">
                    <h3 class="ltext-103 cl5">
                        Shopping
                    </h3>
                </div>

                <div class="flex-w flex-sb-m p-b-52">
                    <div class="flex-w flex-l-m filter-tope-group m-tb-10">
                        <button onClick={() => { setSubCategories([]); setSubCategory(''); setCategory(''); }} class={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${categorySelected == "" ? "how-active1" : ""}`} data-filter="*">
                            All Products
                        </button>
                        {
                            categories?.length !== 0 && categories?.map((cate, i) => (
                                <button key={i} onClick={() => { setSubCategories(cate?.subcategories); setSubCategory(''); setCategory(cate?.slug); }} class={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${categorySelected == cate?.name ? "how-active1" : ""}`} data-filter={`.${cate.slug}`}>
                                    {cate?.name}
                                </button>
                            ))
                        }

                    </div>

                    <div class="flex-w flex-c-m m-tb-10">
                        <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                            <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                            <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                            Filter
                        </div>

                        <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                            <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                            <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                            Search
                        </div>
                    </div>

                    {/* <!-- Search product --> */}
                    <div class="dis-none panel-search w-full p-t-10 p-b-15">
                        <div class="bor8 dis-flex p-l-15">
                            <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                <i class="zmdi zmdi-search"></i>
                            </button>

                            <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
                        </div>
                    </div>

                    {/* <!-- Filter --> */}
                    <div class="dis-none panel-filter w-full p-t-10">
                        <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                            <div class="filter-col1 p-r-15 p-b-27">
                                <div class="mtext-102 cl2 p-b-15">
                                    By Sub Category
                                </div>

                                <ul>
                                    {subcategories?.length !== 0 && subcategories?.map((sub, i) => (
                                        <li class="p-b-6" key={i} style={{ cursor: 'pointer' }} onClick={() => setSubCategory(sub?.slug)}>
                                            <span style={subcategorySelected == sub?.slug ? activeStyle : {}} class="filter-link stext-106 trans-04">{sub?.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div class="filter-col2 p-r-15 p-b-27">
                                <div class="mtext-102 cl2 p-b-15">
                                    Price
                                </div>

                                <ul>
                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                                            All
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04">
                                            $0.00 - $50.00
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04">
                                            $50.00 - $100.00
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04">
                                            $100.00 - $150.00
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04">
                                            $150.00 - $200.00
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <a href="#" class="filter-link stext-106 trans-04">
                                            $200.00+
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="filter-col3 p-r-15 p-b-27">
                                <div class="mtext-102 cl2 p-b-15">
                                    Color
                                </div>

                                <ul>
                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#222" }}>
                                            <i class="zmdi zmdi-circle"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04">
                                            Black
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#4272d7" }}>
                                            <i class="zmdi zmdi-circle"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                                            Blue
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#b3b3b3" }}>
                                            <i class="zmdi zmdi-circle"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04">
                                            Grey
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#00ad5f" }}>
                                            <i class="zmdi zmdi-circle"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04">
                                            Green
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#fa4251" }}>
                                            <i class="zmdi zmdi-circle"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04">
                                            Red
                                        </a>
                                    </li>

                                    <li class="p-b-6">
                                        <span class="fs-15 lh-12 m-r-6" style={{ color: "#aaa" }}>
                                            <i class="zmdi zmdi-circle-o"></i>
                                        </span>

                                        <a href="#" class="filter-link stext-106 trans-04">
                                            White
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="filter-col4 p-b-27">
                                <div class="mtext-102 cl2 p-b-15">
                                    Tags
                                </div>

                                <div class="flex-w p-t-4 m-r--5">
                                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                        Fashion
                                    </a>

                                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                        Lifestyle
                                    </a>

                                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                        Denim
                                    </a>

                                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                        Streetstyle
                                    </a>

                                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                        Crafts
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row isotope-grid">
                    {products?.length!==0 && products?.map((product,i)=>(
                        <div key={i} class={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product?.categories[0]?.slug}`}>
                        {/* <!-- Block2 --> */}
                        <ProductView data={product}/>
                    </div>
                    ))}
                    
                </div>

                {/* <!-- Load more --> */}
                <div class="flex-c-m flex-w w-full p-t-45">
                    <a href="#" class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                        Load More
                    </a>
                </div>
            </div>
        </div>
    )
}






export default Products