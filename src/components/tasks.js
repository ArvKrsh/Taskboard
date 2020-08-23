import React from 'react'
import { Container, Row, Col, FormControl, Card } from 'react-bootstrap';
import store from '../store'
import { addStarted, addToDo, addCompleted } from '../actions/tasks-actions'

class Tasks extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            if (e.target.dataset.name === 'todo') {
                if (e.target.value) {
                    store.dispatch(addToDo(e.target.value));
                    e.target.value = ''
                }
            }
            if (e.target.dataset.name === 'started') {
                if (e.target.value) {
                    store.dispatch(addStarted(e.target.value));
                    e.target.value = ''
                }
            }
            if (e.target.dataset.name === 'completed') {
                if (e.target.value) {
                    store.dispatch(addCompleted(e.target.value));
                    e.target.value = ''
                }
            }
        }
    }

    render() {
        const todo = store.getState().todo;
        const started = store.getState().started;
        const completed = store.getState().completed;

        const todoList = todo.map((t) => (<Row><Col><Card body className='card-todo'>{t}</Card></Col></Row>))
        const startedList = started.map((s) => (<Row><Col><Card body className='card-started'>{s}</Card></Col></Row>))
        const completedList = completed.map((c) => (<Row><Col><Card body className='card-completed'>{c}</Card></Col></Row>))
        return (
            <Container className="list">
                <Row>
                    <Col>
                        <Row><Col>NEW</Col></Row>
                        <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            onKeyDown={this.handleKeyDown} data-name="todo" /></Row>
                        {todoList}
                    </Col>
                    <Col>
                        <Row><Col>PROGRESS</Col></Row>
                        <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            onKeyDown={this.handleKeyDown} data-name="started" /></Row>
                        {startedList}
                    </Col>
                    <Col>
                        <Row><Col>COMPLETED</Col></Row>
                        <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            onKeyDown={this.handleKeyDown} data-name="completed" /></Row>
                        {completedList}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Tasks