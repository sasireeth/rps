import {Component} from 'react'
import CartContext from './context/CartContext'
import Header from './components/Header'
import Home from './components/Home'
import Rules from './components/Rules'
import {Back} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, isActive: true}

  incrementScore = () => {
    this.setState(prev => ({score: prev.score + 1}))
  }

  decrementScore = () => {
    this.setState(prev => ({score: prev.score - 1}))
  }

  change = () => {
    this.setState(prev => ({isActive: !prev.isActive}))
  }

  render() {
    const {score, isActive} = this.state
    return (
      <CartContext.Provider
        value={{
          score,
          isActive,
          incrementScore: this.incrementScore,
          decrementScore: this.decrementScore,
          change: this.change,
        }}
      >
        <Back>
          <Header />
          <Home />
          <Rules />
        </Back>
      </CartContext.Provider>
    )
  }
}

export default App
