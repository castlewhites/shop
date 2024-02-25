import React from 'react'
import PropTypes from 'prop-types'

import './ArticlesCard.scss'

function ArticlesCard({product, setProducSelected, allProducts, index}) {
  return (
    <button 
      type='button' 
      className='article-card'
      onClick={()=> setProducSelected(allProducts[index])}
    >
      <img src={product.variants[0].img} alt={`img-${product.id}`} />
      {!!product.originalPrice && !product.offerPrice  &&
        <p className='slider-price original'>${product.originalPrice}</p>
      }
      {!!product.offerPrice && !product.originalPrice &&
        <p className='slider-price offer'>${product.offerPrice} </p>
      }
      {!!product.originalPrice && !!product.offerPrice &&
        <p className='slider-price offer'>${product.offerPrice}</p>
      }
      <h3>{product.name}</h3>
    </button>
  )
}

ArticlesCard.propTypes = {
  product: PropTypes.object.isRequired,
  setProducSelected: PropTypes.func.isRequired,
  allProducts: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

export default ArticlesCard