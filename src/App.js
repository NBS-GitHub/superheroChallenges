import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import About from './About';
import Error from './Error';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.drawId = () => {
      let S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
    this.state = {
      tasks: [
        {
          id: this.drawId(),
          text: 'stop the volcano eruption - Italy',
          date: '2019-02-15',
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: this.drawId(),
          text: 'milk x2, bread, gift for aunt',
          date: '2019-05-23',
          important: false,
          active: true,
          finishDate: null
        },
        {
          id: this.drawId(),
          text: 'save people from the flood in the central Brasil',
          date: '2019-02-12',
          important: true,
          active: true,
          finishDate: null
        },
      ]
    }
  }

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.drawId(),
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  }

  render() {
    return (
      <Router>
        <div className='appWrap'>
          <Header />
          <main>
            <Switch>

              <Route path={`${process.env.PUBLIC_URL}/`} exact render={
                () =>
                  <div>
                    <AddTask add={this.addTask} />
                    <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                  </div>
              } />
              <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
              <Route component={Error} />

            </Switch>
          </main>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;