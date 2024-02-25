import React from 'react'
import useProduct from '../../hooks/useProduct'
import MobileSlider from './MobileSlider'
import ArticlesCard from './ArticlesCard'
import './ArticleList.scss'

function ArticleList() {
  const products = useProduct()
  const {allProducts, setProducSelected, productSelected:{id}} = products
  return (
    <section className='article-list'>
      <h1>YOU MAY ALSO LIKE</h1>
      <MobileSlider 
        allProducts={allProducts}
        setProducSelected={setProducSelected}
      />
      <div className='article-list__main'>
        {allProducts?.map((product, index) => {
          if (product.id !== id) {
            return (
              <ArticlesCard 
                key={`${product.id}-${index}`}
                allProducts={allProducts}
                product={product}
                index={index}
                setProducSelected={setProducSelected}
              />
            )
          }
        })
        }
      </div>
    </section>
  )
}

export default ArticleList