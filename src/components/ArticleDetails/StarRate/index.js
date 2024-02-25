import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../Icons'

import './StarRate.scss'

export default function StarRate({rateValues}) {
  return (
    <div className="star-rate">
      {rateValues.map(value => (
        <Icon
          key={value}
          item="star"
          width="18px"
          height="18px"
          fill={value !== 5 ? '#d02c54' : 'grey'}
        />
      ))
      }
    </div>
  )
 
}
StarRate.propTypes = {
  rateValues: PropTypes.array.isRequired,
}
  