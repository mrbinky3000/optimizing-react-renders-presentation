import React, { useContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { DemoContext } from './DemoContext.jsx'

let renderCount = 0

const BlockA3 = () => {
  renderCount += 1
  const { onClickUsername, userName } = useContext(DemoContext)
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return useMemo(() => (
  <div style={{ backgroundColor: getRandomHexColor() }}>
    <h1><span>Block A3: {renderCount}</span></h1>
    <button onClick={onClickTimestamp}>Timestamp</button>
    <button onClick={onClickUsername}>Username</button>
    <p>timestamp: {myTimeStamp} userName: {userName} </p>
  </div>
  ))
}

export default React.memo(BlockA3)

BlockA3.propTypes = {
  userName: PropTypes.string
}

BlockA3.defaultProps = {
  userName: null
}
