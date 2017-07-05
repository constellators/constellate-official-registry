import 'normalize.css'

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'glamorous'

import * as theme from '../../style/theme'

import './styles'

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}
