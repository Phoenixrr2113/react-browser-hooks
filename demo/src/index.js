import React, { Component } from 'react'
import { render } from 'react-dom'

import FullScreen from './components/fullscreen'
import Resize from './components/resize'
import MediaControls from './components/media-controls'
class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Reach Browser Hooks Examples</h1>
        <FullScreen />
        <Resize />
        <MediaControls />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
