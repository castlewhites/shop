import React from 'react'
import PropTypes from 'prop-types'
import MediaIcons from './MediaIcons'

function CardImg({ productSelected} ) {
  const variants = productSelected.variants
  return (
    <article className="main-image">
      <h1 className="main-image__title">FOR GEECKS BY GEECKS TEE</h1>
      <div className="main-image__container">
        <img src={variants[0].img}  alt="main-image" />
        <div className='main-image__icons-mobile'>
          <MediaIcons/>
        </div>
      </div>
    </article>
  )
}
CardImg.propTypes = {
  productSelected: PropTypes.object.isRequired
}

export default CardImg