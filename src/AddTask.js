import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleDate = e => {
        this.setState({
            date: e.target.value
        });
    }

    handleText = e => {
        this.setState({
            text: e.target.value
        });
    }

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { text, checked, date } = this.state;
        if (text.length < 1) return;
        const add = this.props.add(text, date, checked);
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            });
        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate += '-12-31';
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Challenge</h2>
                <div className="inputs">
                    <div className="row">
                        <input type="text" placeholder='Enter Challenge Name' value={this.state.text} onChange={this.handleText} />
                    </div>
                    <div className="row">
                        <input id='important' type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />
                        <label htmlFor="important">High Priority</label>
                    </div>
                    <div className="row date">
                        <label htmlFor="deadline">Deadline: </label>
                        <input id='deadline' type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                    </div>
                    <button>do it!</button>
                </div>

            </form>
        );
    }
}

export default AddTask;