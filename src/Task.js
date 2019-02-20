import React from 'react';
import './Task.css';

const Task = props => {
    const style = {
        color: 'var(--red)',
    }
    const { text, date, id, active, important, finishDate } = props.task;
    if (active) {
        return (
            <div className='task unfinished'>
                <div className='row'>
                    <strong>{important ? <span style={style}>! &emsp;</span> : <span>&nbsp;&nbsp;&emsp;</span>} {text}</strong>
                </div>
                <div className='row'>
                    <span>to do by {date}</span>
                </div>
                <div className="buttons">
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </div>
            </div >
        );
    } else {
        const finish = new Date(finishDate).toLocaleString();
        return (
            <div className='task finished'>
                <div className='row'>
                    <strong>{text}</strong><span> (to do by {date})</span>
                </div>
                <div className='row'>accomplished <span>{finish}</span></div>
                <button onClick={() => props.delete(id)}>X</button>
            </div >
        );
    }

}

export default Task;