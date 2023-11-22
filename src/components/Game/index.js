import {Component} from 'react'
import CartContext from '../../context/CartContext'
import {Img, Hom, But} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'paperButton',
  },
]

const Game = props => (
  <CartContext.Consumer>
    {value => {
      const {item, click} = props
      const {id, imageUrl} = item
      const {score, incrementScore, decrementScore} = value
      const rnd = Math.floor(Math.random() * 3)
      console.log('Hi')
      const id1 = choicesList[rnd].id
      const ur = choicesList[rnd].imageUrl
      let res = ''
      if (id === 'ROCK' && id1 === 'ROCK') {
        res = 'IT IS DRAW'
      } else if (id === 'ROCK' && id1 === 'PAPER') {
        res = 'YOU LOSE'
      } else if (id === 'ROCK' && id1 === 'SCISSORS') {
        res = 'YOU WIN'
      } else if (id === 'PAPER' && id1 === 'ROCK') {
        res = 'YOU WIN'
      } else if (id === 'PAPER' && id1 === 'PAPER') {
        res = 'IT IS DRAW'
      } else if (id === 'PAPER' && id1 === 'SCISSORS') {
        res = 'YOU LOSE'
      } else if (id === 'SCISSORS' && id1 === 'ROCK') {
        res = 'YOU LOSE'
      } else if (id === 'SCISSORS' && id1 === 'PAPER') {
        res = 'YOU WIN'
      } else if (id === 'SCISSORS' && id1 === 'SCISSORS') {
        res = 'IT IS DRAW'
      }
      console.log(ur)
      if (res === 'YOU WIN') {
        incrementScore()
      }
      if (res === 'YOU LOSE') {
        decrementScore()
      }
      const clik = () => {
        click(item)
      }
      return (
        <div>
          <div>
            <div>
              <h1>YOU</h1>
              <img src={imageUrl} />
            </div>
            <div>
              <h1>OPPONENT</h1>
              <img src={ur} />
            </div>
          </div>
          <div>
            <p>{res}</p>
            <button onClick={clik}>Play Again</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Game
