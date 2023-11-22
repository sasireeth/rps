import {Component} from 'react'
import CartContext from '../../context/CartContext'
import {Img, Hom, But} from './styledComponents'
import Item from '../Item'
import Game from '../Game'
import './index.css'

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

class Home extends Component {
  state = {sel: ''}

  click = item => {
    const i1 = document.getElementById('c1')
    const i2 = document.getElementById('c2')
    i2.style.display = 'block'
    i1.style.display = 'none'
    this.setState(pre => ({sel: item}))
  }

  swap = () => {
    const i1 = document.getElementById('c1')
    const i2 = document.getElementById('c2')
    i2.style.display = 'none'
    i1.style.display = 'block'
  }

  render() {
    const {sel} = this.state
    return (
      <>
        <Hom id="c1">
          {choicesList.map(each => (
            <Item click={this.click} item={each} key={each.id} />
          ))}
        </Hom>
        <div id="c2" className="c2">
          <Game item={sel} swap={this.swap} />
        </div>
      </>
    )
  }
}
export default Home
