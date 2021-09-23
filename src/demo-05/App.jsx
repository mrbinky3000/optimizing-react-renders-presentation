import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { getRandomName } from './helpers'
import { userState } from './appState'
import BlockA from './BlockA.jsx'
import BlockB from './BlockB.jsx'
import s from './App.scss'

let renderCount = 1

const Demo5 = () => {
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
    <div className={s.app} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Demo 5 (Using Recoil from Facebook): {renderCount}</span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <button onClick={onClickUsername}>Username</button>
      <p>timestamp: {myTimeStamp} userName: {userValue.username} </p>
      <BlockA className={s.blockA} />
      <BlockB className={s.blockB} userName={userValue.username} />
    </div>
  )
}

export default Demo5
