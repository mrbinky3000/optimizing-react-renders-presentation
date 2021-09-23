import React from 'react'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'

const AppVM = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

export default AppVM
