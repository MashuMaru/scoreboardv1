import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    tick = () => {
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }))
        }
    }

    handleStopwatch = () => {
        this.setState (prevState => ({
            isRunning: !prevState.isRunning
        }))
        if (!this.state.isRunning) {
            this.setState({previousTime: Date.now()});
        }
    }

    handleReset = () => {
        this.setState({
            time: 0
        })
    }

    render() {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.time}</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
