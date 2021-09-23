import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import BlockB2 from './BlockB2.jsx'

let renderCount = 0

const BlockB = ({ userName, className }) => {
  renderCount += 1
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return (
    <div className={className} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block B: {renderCount} </span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <p>timestamp: {myTimeStamp}</p>
      <BlockB2 userName={userName} />
    </div>
  )
}

export default BlockB

BlockB.propTypes = {
  userName: PropTypes.string,
  className: PropTypes.string
}

BlockB.defaultProps = {
  userName: null,
  className: null
}
