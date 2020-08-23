import { ADD_TODO, ADD_STARTED, ADD_COMPLETED } from './types'

function addToDo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    }
}

function addStarted(started) {
    return {
        type: ADD_STARTED,
        started: started
    }
}

function addCompleted(completed) {
    return {
        type: ADD_COMPLETED,
        completed: completed
    }
}

export { addStarted, addToDo, addCompleted }