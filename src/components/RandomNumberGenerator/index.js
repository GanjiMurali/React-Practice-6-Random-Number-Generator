// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  randomNum = () => {
    const randomNum = this.getRandomNumber()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.randomNum} className="btn" type="button">
            Generate
          </button>
          <p className="num">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
