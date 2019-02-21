import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
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

  // counter = 9;

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
    // this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  }

  render() {
    return (
      <div className='appWrap'>
        <Header />
        <main>
          <AddTask add={this.addTask} />
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;