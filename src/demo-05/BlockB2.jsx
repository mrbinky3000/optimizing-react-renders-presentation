import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import BlockB3 from './BlockB3.jsx'

let renderCount = 0

const BlockB2 = ({ userName }) => {
  renderCount += 1
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return (
    <div style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block B2: {renderCount} </span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <p>timestamp: {myTimeStamp}</p>
      <BlockB3 userName={userName} />
    </div>
  )
}

export default BlockB2

BlockB2.propTypes = {
  userName: PropTypes.string,
  className: PropTypes.string
}

BlockB2.defaultProps = {
  userName: null,
  className: null
}
