import React from 'react'
import PropTypes from 'prop-types'

export const DemoContext = React.createContext()

DemoContext.Provider.propTypes = {
  pickNewUsername: PropTypes.func,
  userName: PropTypes.string
}
