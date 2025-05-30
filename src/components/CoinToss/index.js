// Write your code here
import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, imgUrl: headsImage}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imgUrl: headsImage,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        imgUrl: tailsImage,
      }))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state

    return (
      <div className="bg-container">
        <div className="coin-toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-or-tail">Heads (or) Tails</p>
          <img src={imgUrl} className="head-tail-image" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="counters-container">
            <p className="counter-text">Total: {total}</p>
            <p className="counter-text">Heads: {heads}</p>
            <p className="counter-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
