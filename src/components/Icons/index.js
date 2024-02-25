import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Fb } from '../../assets/fb.svg'
import { ReactComponent as Yt } from '../../assets/yt.svg'
import { ReactComponent as Pt } from '../../assets/pt.svg'
import { ReactComponent as Tw } from '../../assets/tw.svg'
import { ReactComponent as Star } from '../../assets/star.svg'
import { ReactComponent as PrevNext } from '../../assets/prev-next.svg'

function Icon(props) {
  const { item, width, height, fill, stroke, className } = props
  const iconsList = {
    fb: (
      <Fb
        fill="#2a83c8"
        stroke="#2a83c8"
        height={height}
        width={width}
        className={className}
      />
    ),
    yt: (
      <Yt
        fill={fill}
        stroke={stroke}
        height={height}
        width={width}
        className={className}
      />
    ),
    pt: (
      <Pt
        fill={fill}
        stroke={stroke}
        height={height}
        width={width}
        className={className}
      />
    ),
    tw: (
      <Tw
        fill={fill}
        stroke={stroke}
        height={height}
        width={width}
        className={className}
      />
    ),
    star: (
      <Star
        fill={fill}
        stroke={stroke}
        height={height}
        width={width}
        className={className}
      />
    ),
    prevNext: (
      <PrevNext
        fill={fill}
        stroke={stroke}
        height={height}
        width={width}
        className={className}
      />
    ),
        
  }
  return iconsList?.[item] ?? null
}
Icon.propTypes = {
  item: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  width: '16px',
  height: '16px',
  fill: '#FFF',
  stroke: '#FFF',
  className: '',
}
export default Icon