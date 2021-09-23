import React, { useState, useEffect, useCallback } from 'react'
import { getRandomHexColor } from '@express-labs/raven-tools'
import { DemoContextValues, DemoContextActions } from './DemoContext.jsx'
import BlockA from './BlockA.jsx'
import BlockB from './BlockB.jsx'
import s from './App.scss'

let renderCount = 1

const getRandomName = () => {
  const items = ['Amy', 'Bob', 'Charlie', 'Daanesh', 'Ernie', 'Felix', 'George', 'Helen', 'Isabela', 'Joyce']
  return items[Math.floor(Math.random() * items.length)]
}

const Demo3 = () => {
  const [myTimeStamp, setMyTimestamp] = useState(Date.now())
  const [userName, setMyUsername] = useState('Larry')
  const onClickTimestamp = () => setMyTimestamp(Date.now())
  const onClickUsername = useCallback(
    () => { setMyUsername(getRandomName()) },
    [setMyUsername]
  )

  useEffect(() => {
    renderCount += 1
  })

  return (
    <div className={s.app} style={{ backgroundColor: getRandomHexColor() }}>
      <DemoContextValues.Provider value={userName}>
        <DemoContextActions.Provider value={ onClickUsername }>
          <h1><span>Demo 3 (Using Context Optimized): {renderCount}</span></h1>
          <button onClick={onClickTimestamp}>Timestamp</button>
          <button onClick={onClickUsername}>Username</button>
          <p>timestamp: {myTimeStamp} userName: {userName} </p>
          <BlockA className={s.blockA} />
          <BlockB className={s.blockB} userName={userName} />
        </DemoContextActions.Provider>
      </DemoContextValues.Provider>
    </div>
  )
}

export default Demo3
