import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { getRandomName } from './helpers'
import { userState } from './appState'

let renderCount = 1

const BlockA3 = () => {
  const [userValue, setUserValue] = useRecoilState(userState)
  const onClickUsername = () => {
    setUserValue((oldUserState) => ({
      ...oldUserState,
      username: getRandomName()
    }))
  }

  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  useEffect(() => {
    renderCount += 1
  })

  return (
    <div style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block A3: {renderCount}</span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <button onClick={onClickUsername}>Username</button>
      <p>timestamp: {myTimeStamp} userName: {userValue.username} </p>
    </div>
  )
}

export default React.memo(BlockA3)

BlockA3.propTypes = {
  userName: PropTypes.string
}

BlockA3.defaultProps = {
  userName: null
}
