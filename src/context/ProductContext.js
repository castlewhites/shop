import { createContext } from 'react'

const ProductContext = createContext({
  productSelected: 0,
  products: []
})

export default ProductContext