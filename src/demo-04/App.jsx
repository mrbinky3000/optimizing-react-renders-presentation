import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername } from './userSlice'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { getRandomName } from './helpers'
import BlockA from './BlockA.jsx'
import BlockB from './BlockB.jsx'
import s from './App.scss'

let renderCount = 1

const Demo4 = () => {
  const username = useSelector((state) => state.user.username)
  const dispatch = useDispatch()
  const onClickUsername = () => dispatch(setUsername(getRandomName()))

  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const onClickTimestamp = () => setMyTimestamp(Date.now())

  useEffect(() => {
    renderCount += 1
  })

  return (
    <div className={s.app} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Demo 4 (Using React Redux): {renderCount}</span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <button onClick={onClickUsername}>Username</button>
      <p>timestamp: {myTimeStamp} userName: {username} </p>
      <BlockA className={s.blockA} />
      <BlockB className={s.blockB} userName={username} />
    </div>
  )
}

export default Demo4
