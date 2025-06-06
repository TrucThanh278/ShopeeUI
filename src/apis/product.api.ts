import { SuccessResponse } from './../types/utils.type'
import http from '../utils/http'
import { Product, ProductList, ProductListConfig } from '../types/product.type'

const URL = '/products'

const productApi = {
  getProducts: (params: ProductListConfig) => http.get<SuccessResponse<ProductList>>(URL, { params }),
  getProductDetail: (id: string) => http.get<SuccessResponse<Product>>(`${URL}/${id}`)
}

export default productApi
