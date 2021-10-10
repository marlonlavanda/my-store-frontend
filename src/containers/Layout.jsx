import React from 'react'
import Home from '@components/Header'

function Layout({ children }) {
  return (
    <div>
      <div className="Layout">
        <Home />
        { children }
      </div>
    </div>
  )
}

export default Layout
