import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ArticleCard from '../ArticlesCard'
import Icon from '../../Icons'
import './MobileSlider.scss'

export default function MobileSlider({ allProducts, setProducSelected }) {
  const [imgSelected, setimgSelected] = useState(0)
  const length = allProducts.length

  function handleSlide(direction) {
    if(imgSelected !==0 && direction === 'prev') setimgSelected(imgSelected - 1)
    if(imgSelected ===0 && direction === 'prev') setimgSelected(length - 1)
    if(imgSelected <= length-1 && direction === 'next') setimgSelected(imgSelected + 1)
    if(imgSelected === length-1 && direction === 'next') setimgSelected(0)

  }

  return (
    <article className='mobile-slider'>
      <button type='button' 
        className='arrow-btn prev'  
        onClick={()=> handleSlide('prev')}
      >
        <Icon
          item='prevNext'
          width="50px"
          height="50px"
          fill={'#959595'}
        />
      </button>
      {allProducts?.map((product, index) => {
        if (imgSelected === index) {
          return (
            <ArticleCard 
              key={index}
              allProducts={allProducts}
              product={product}
              index={index}
              setProducSelected={setProducSelected}
            />
          )
        }
      })
      }
      <button type='button' 
        className='arrow-btn'  
        onClick={()=> handleSlide('next')}
      >
        <Icon
          item='prevNext'
          width="50px"
          height="50px"
          fill={'#959595'}
        />
      </button>
    </article>
  )
}

MobileSlider.propTypes = {
  allProducts: PropTypes.array.isRequired, 
  setProducSelected: PropTypes.func.isRequired,
}