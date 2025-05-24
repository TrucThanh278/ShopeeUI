export interface Product {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

export interface ProductListConfig {
  page?: number
  limit?: number
  sort_by?: string
  sort_type?: 'createAt' | 'view' | 'sold' | 'price'
  exclude?: string
  price_max?: number
  price_min?: number
  rating_filter?: number
  name?: string
}
