
function todoReducer(todo = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      todo = [
        ...todo,
        action.todo
      ]
      console.log(todo)
      return todo
  
    default:
      return todo
  }
}

function startedReducer(started = [], action) {
  switch (action.type) {
    case 'ADD_STARTED':
      console.log(action.started, '---started')
      started = [
        ...started,
        action.started
      ]
      console.log(started)
      return started
  
    default:
      return started
  }
}

function completedReducer(completed = [], action) {
    switch (action.type) {
      case 'ADD_COMPLETED':
        completed = [
          ...completed,
          action.completed
        ]
        console.log(completed)
        return completed
    
      default:
        return completed
    }
}

export { todoReducer, startedReducer, completedReducer }
