// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    sec: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  reset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, sec: 0})
  }

  stop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({
      sec: prevState.sec + 1,
    }))
  }

  start = () => {
    this.timeInterval = setInterval(this.tick, 1000)
    this.setState({isTimeRunning: true})
  }

  renderingSeconds = () => {
    const {sec} = this.state
    const seconds = Math.floor(sec % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderingMinutes = () => {
    const {sec} = this.state
    const minutes = Math.floor(sec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderingMinutes()}:${this.renderingSeconds()}`

    return (
      <div className="whole-container">
        <h1>Stopwatch</h1>
        <div className="inner-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <button
            type="button"
            onClick={this.start}
            disabled={isTimeRunning}
            className="button start-button"
          >
            Start
          </button>
          <button
            type="button"
            onClick={this.stop}
            className="button stop-button"
          >
            Stop
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="button reset-button"
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}
export default Stopwatch
