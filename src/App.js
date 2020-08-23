import React from "react";
import "./styles.css";
import { Container, Row, Col, FormControl, Card } from 'react-bootstrap';
import store from './store'
import Count from './components/count'
import { PieChart } from 'react-minimal-pie-chart';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      if(e.target.dataset.name === 'todo') {
        if(e.target.value) {
          store.dispatch(this.addToDo(e.target.value));
          e.target.value = ''
        }
      }
      if(e.target.dataset.name === 'started') {
        if(e.target.value) {
          store.dispatch(this.addStarted(e.target.value));
          e.target.value = ''
        }
      }
      if(e.target.dataset.name === 'completed') {
        if(e.target.value) {
          store.dispatch(this.addCompleted(e.target.value));
          e.target.value = ''
        }
      }
    }
  }

  addToDo(todo) {
    return {
      type: 'ADD_TODO',
      todo: todo
    }
  }

  addStarted(started) {
    return {
      type: 'ADD_STARTED',
      started: started
    }
  }

  addCompleted(completed) {
    return {
      type: 'ADD_COMPLETED',
      completed: completed
    }
  }

  render() {
    const todo = store.getState().todo;
    const started = store.getState().started;
    const completed = store.getState().completed;

    const todoList = todo.map((t)=> (<Row><Col><Card body className='card-todo'>{t}</Card></Col></Row>))
    const startedList = started.map((s)=> (<Row><Col><Card body className='card-started'>{s}</Card></Col></Row>))
    const completedList = completed.map((c)=> (<Row><Col><Card body className='card-completed'>{c}</Card></Col></Row>))
    let DisplayPie;
     if (store.getState().todo.length || store.getState().started.length || store.getState().completed.length) {
      DisplayPie =<Container className="chart-container"> <PieChart
                data={[
                  { title: 'One', value: store.getState().todo.length, color: '#E38627' },
                  { title: 'Two', value: store.getState().started.length, color: '#C13C37' },
                  { title: 'Three', value: store.getState().completed.length, color: '#6A2135' },
                ]} radius={PieChart.defaultProps.radius - 7}
                animate
                animationDuration={500}
                animationEasing="ease-out" labelPosition={50}
          /> 
          </Container>
    }
    return (
      <div className="App">
        <h1 className="list-name">Tasks</h1>
        <Count></Count>
        {DisplayPie}
        <Container className="list">
          <Row>
            <Col>
              <Row><Col>NEW</Col></Row>
              <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
              onKeyDown={this.handleKeyDown} data-name="todo"/></Row>
             { todoList }
            </Col>
            <Col>
              <Row><Col>PROGRESS</Col></Row>
              <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              onKeyDown={this.handleKeyDown} data-name="started" /></Row>
             { startedList }
            </Col>
            <Col>
               <Row><Col>COMPLETED</Col></Row>
              <Row><FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              onKeyDown={this.handleKeyDown} data-name="completed"/></Row>
             { completedList }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
