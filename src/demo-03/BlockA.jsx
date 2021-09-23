import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import BlockA2 from './BlockA2.jsx'

let renderCount = 0

const BlockA = ({ className }) => {
  renderCount += 1
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return (
    <div className={className} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block A: {renderCount} </span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <p>timestamp: {myTimeStamp}</p>
      <BlockA2 />
    </div>
  )
}

export default React.memo(BlockA)

BlockA.propTypes = {
  className: PropTypes.string
}

BlockA.defaultProps = {
  className: null
}
