import axios from 'axios'

const BASE_URL = "http://localhost:2023/api"
const instance = axios.create({
    baseURL: BASE_URL,
  headers: {}
})


export const getCategories = async ()=>await instance.get("/category/list").then((data)=>data)
export const getCategoryProducts = async (queryString)=>await instance.get(`/products/category_products${queryString}`).then((data)=>data)
