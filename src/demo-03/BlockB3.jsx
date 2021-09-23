import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'

let renderCount = 0

const BlockB3 = ({ userName }) => {
  renderCount += 1
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return (
  <div style={{ backgroundColor: getRandomHexColor() }}>
    <h1><span>Block B3: {renderCount}</span></h1>
    <button onClick={onClickTimestamp}>Timestamp</button>
    <p>timestamp: {myTimeStamp} userName: {userName} </p>
  </div>
  )
}

export default BlockB3

BlockB3.propTypes = {
  userName: PropTypes.string
}

BlockB3.defaultProps = {
  userName: null
}
