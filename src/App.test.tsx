import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <div className="app">
      <App />
    </div>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
