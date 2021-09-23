import React, { useState, useEffect } from 'react'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { DemoContext } from './DemoContext.jsx'
import BlockA from './BlockA.jsx'
import BlockB from './BlockB.jsx'
import s from './App.scss'

let renderCount = 1

const getRandomName = () => {
  const items = ['Amy', 'Bob', 'Charlie', 'Daanesh', 'Ernie', 'Felix', 'George', 'Helen', 'Isabela', 'Joyce']
  return items[Math.floor(Math.random() * items.length)]
}

const Demo2 = () => {
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const [userName, setMyUsername] = useState('Larry')
  const onClickTimestamp = () => setMyTimestamp(Date.now())
  const onClickUsername = () => { setMyUsername(getRandomName()) }
  useEffect(() => {
    renderCount += 1
  })

  return (
    <div className={s.app} style={{ backgroundColor: getRandomHexColor() }}>
      <DemoContext.Provider value={{
        onClickUsername,
        userName
      }}>
        <h1><span>Demo 2 (Using Context): {renderCount}</span></h1>
        <button onClick={onClickTimestamp}>Timestamp</button>
        <button onClick={onClickUsername}>Username</button>
        <p>timestamp: {myTimeStamp} userName: {userName} </p>
        <BlockA className={s.blockA} />
        <BlockB className={s.blockB} userName={userName} />
      </DemoContext.Provider>
    </div>
  )
}

export default Demo2
