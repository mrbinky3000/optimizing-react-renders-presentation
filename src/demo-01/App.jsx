import React, { useState, useEffect } from 'react'
import { getRandomHexColor } from '@express-labs/raven-tools'
import BlockA from './BlockA.jsx'
import BlockB from './BlockB.jsx'
import s from './App.scss'

let renderCount = 0

const Demo1 = () => {
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const [userName, setMyUsername] = useState('Larry')
  const onClickTimestamp = () => setMyTimestamp(Date.now())
  const onClickUsername = () => {
    const items = ['Amy', 'Bob', 'Charlie', 'Daanesh', 'Ernie', 'Felix']
    setMyUsername(items[Math.floor(Math.random() * items.length)])
  }
  useEffect(() => {
    renderCount += 1
  })

  return (
    <div className={s.app} style={{ backgroundColor: getRandomHexColor() }}>
      <h1><span>Demo 1 (Passing Props): {renderCount}</span></h1>
      <button onClick={onClickTimestamp}>Timestamp</button>
      <button onClick={onClickUsername}>Username</button>
      <p>timestamp: {myTimeStamp} userName: {userName} </p>
      <BlockA className={s.blockA} userName={userName} />
      <BlockB className={s.blockB} userName={userName} />
    </div>
  )
}

export default Demo1
