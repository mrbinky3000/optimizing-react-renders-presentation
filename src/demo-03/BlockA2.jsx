import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import BlockA3 from './BlockA3.jsx'

let renderCount = 0

const BlockA2 = ({ className }) => {
  renderCount += 1
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return (
    <div className={className} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block A2: {renderCount} </span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <p>timestamp: {myTimeStamp}</p>
      <BlockA3 />
    </div>
  )
}

export default React.memo(BlockA2)

BlockA2.propTypes = {
  className: PropTypes.string
}

BlockA2.defaultProps = {
  className: null
}
