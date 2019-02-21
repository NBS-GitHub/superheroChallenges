import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = props => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (active.length > 1) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
    if (done.length > 1) {
        done.sort((a, b) => b.finishDate - a.finishDate);
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);
    return (
        <div className='tasksWrapper'>
            <div className='todo'>
                <h2>Challenges to do {active.length > 0 && `(${active.length})`}</h2>
                {activeTasks.length > 0 ? activeTasks : <p>All challenges done</p>}
            </div>
            <div className='done'>
                <h3>Challenges done ({done.length})</h3>
                {doneTasks}
            </div>
        </div>
    );
}

export default TaskList;