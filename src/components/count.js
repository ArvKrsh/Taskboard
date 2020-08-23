import React from 'react'
import store from '../store'

class Count extends React.Component {

  render() {
    return (
      `Todo: ${store.getState().todo.length} |
       In progress: ${store.getState().started.length} |
       Completed: ${store.getState().completed.length}`
    )
  }
}

export default Count