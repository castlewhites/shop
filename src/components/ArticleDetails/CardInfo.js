import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StarRate from './StarRate'
import MediaIcons from './MediaIcons'
import SizeSelector from './Selectors/SizeSelector'
import ColorSelector from './Selectors/ColorSelector'

function CardInfo({ products }) {
  const {productSelected: { sizeOptions, variants, description } } = products
  const [openTooltip, setOpenTooltip] = useState(false)
  const rateValues = [1, 2, 3, 4, 5]
  return (
    <article className='main-info'>
      <div className='main-info__prices-section'>
        <p className='main-info__item-number'>Item: #701642853695</p>
        <div className='main-info__price'>
          <p className='prev-price'>$29.50</p>
          <p className='offer-price'>$19.99</p>
        </div>
        <div className='main-info__share-rate'>
          <StarRate rateValues={rateValues}/>
          <button type='butto' onClick={()=> setOpenTooltip(true)}>
            Share it!
          </button>
          {openTooltip && (<div className='icons-desktop'>
            <MediaIcons/>
            <button onClick={()=> setOpenTooltip(false)}>X</button>
          </div>)}
        </div>
      </div>
      <div className='main-info__icons-mobile'>
        <MediaIcons/>
      </div>
      <div className='main-info__description'>
        <p>{description}</p>
      </div>
      <div className='main-info__options'>
        <div>
          <h3 className='selector-title-mobile'>SELECT A SIZE</h3>
          <h3 className='selector-title'>SIZE:</h3>
          <SizeSelector sizeOptions={sizeOptions} />
        </div>
        <div>
          <h3 className='selector-title-mobile'>SELECT A COLOR</h3>
          <h3 className='selector-title'>COLOR:</h3>
          <ColorSelector variants={variants} />
        </div>
      </div>
      <button className='main-info__button'>
        ADD TO CART
      </button>
    </article>
  )
}

CardInfo.propTypes = {
  products: PropTypes.object.isRequired
}

export default CardInfo