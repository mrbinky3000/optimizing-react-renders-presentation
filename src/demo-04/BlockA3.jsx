import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername } from './userSlice'
import PropTypes from 'prop-types'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { getRandomName } from './helpers'

let renderCount = 0

const BlockA3 = () => {
  renderCount += 1
  const username = useSelector((state) => state.user.username)
  const dispatch = useDispatch()
  const onClickUsername = () => dispatch(setUsername(getRandomName()))

  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  return useMemo(() => (
    <div style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Block A3: {renderCount}</span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <button onClick={onClickUsername}>username</button>
      <p>timestamp: {myTimeStamp} userName: {username} </p>
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
