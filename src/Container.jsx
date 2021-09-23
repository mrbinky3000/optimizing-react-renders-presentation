import React, { Suspense, useState } from 'react'

const Demo1 = React.lazy(() => import('./demo-01/App.jsx'))
const Demo2 = React.lazy(() => import('./demo-02/App.jsx'))
const Demo3 = React.lazy(() => import('./demo-03/App.jsx'))
const Demo4 = React.lazy(() => import('./demo-04/index.jsx'))

const Container = () => {
  const [demoNumber, setDemoNumber] = useState(1)
  const handleOnChange = (event) => setDemoNumber(Number(event.target.value))

  console.log(demoNumber, typeof demoNumber)

  return (
    <>
      <div onChange={handleOnChange}>
        <label>
          <input type="radio" value={1} name="demo" checked={demoNumber === 1} /> Demo 1
        </label>
        <label>
          <input type="radio" value={2} name="demo" checked={demoNumber === 2} /> Demo 2
        </label>
        <label>
          <input type="radio" value={3} name="demo" checked={demoNumber === 3} /> Demo 3
        </label>
        <label>
          <input type="radio" value={4} name="demo" checked={demoNumber === 4} /> Demo 4
        </label>
      </div>
      {demoNumber === 1 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Demo1 />
        </Suspense>
      )}
      {demoNumber === 2 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Demo2 />
        </Suspense>
      )}
      {demoNumber === 3 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Demo3 />
        </Suspense>
      )}
      {demoNumber === 4 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Demo4 />
        </Suspense>
      )}
    </>
  )
}

export default Container
