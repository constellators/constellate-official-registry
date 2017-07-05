import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Div } from 'glamorous'

import Theme from '../Theme'

function App() {
  return (
    <Theme>
      <BrowserRouter forceRefresh={!('pushState' in window.history)}>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100vh"
        >
          <img
            src="https://cdn.rawgit.com/constellators/constellate/8e303aad/assets/logo-full.png"
            width="250"
            height="152.84"
            alt="Constellate"
          />
          <Div marginTop="2rem">coming soon</Div>
        </Div>
      </BrowserRouter>
    </Theme>
  )
}

export default App
