import React from 'react'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'

const AppVM = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppVM
