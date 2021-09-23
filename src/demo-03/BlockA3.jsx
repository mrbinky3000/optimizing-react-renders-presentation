import React, { useContext, useState, useMemo, useEffect } from 'react'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { DemoContextActions, DemoContextValues } from './DemoContext.jsx'

let renderCount = 1

const BlockA3 = () => {
  const userName = useContext(DemoContextValues)
  const onClickUsername = useContext(DemoContextActions)
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  useEffect(() => {
    renderCount += 1
  })

  return useMemo(() => (
  <div style={{ backgroundColor: getRandomHexColor() }}>
    <h1><span>Block A3: {renderCount} </span></h1>
    <button onClick={onClickTimestamp}>Timestamp</button>
    <button onClick={onClickUsername}>Username</button>
    <p>timestamp: {myTimeStamp} userName: {userName} </p>
  </div>
  ))
}

export default React.memo(BlockA3)
