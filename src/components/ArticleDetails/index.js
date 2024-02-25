import React from 'react'
import CardImg from './CardImg'
import CardInfo from './CardInfo'
import useProduct from '../../hooks/useProduct'

import './ArticleDetails.scss'

function ArticleDetails () {
  const products = useProduct()
  
  const productSelected = products.productSelected
  return (
    <section className="details-article">
      <CardImg productSelected={productSelected}/>
      <CardInfo products={products}/>
    </section>
  )
}

export default ArticleDetails