import React from "react";
import "./styles.css";
import store from './store'
import Count from './components/count'
import Pie from './components/pie'
import Tasks from './components/tasks'
class App extends React.Component {

  render() {

    let DisplayPie = false;
    if (store.getState().todo.length || store.getState().started.length || store.getState().completed.length) {
      DisplayPie = true
    }
    return (
      <div className="App">
        <h1 className="list-name">Tasks</h1>
        <Count></Count>
        {DisplayPie && <Pie></Pie>}
        <Tasks></Tasks>
      </div>
    );
  }
}

export default App;
