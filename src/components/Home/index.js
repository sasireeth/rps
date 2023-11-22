import {Component} from 'react'
import CartContext from '../../context/CartContext'
import {Img, Hom, But} from './styledComponents'
import Item from '../Item'
import Game from '../Game'

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
  state = {sel: '', isActive: true}

  click = item => {
    console.log(item)
    this.setState(pre => ({sel: item, isActive: !pre.isActive}))
  }

  render() {
    const {isActive, sel} = this.state
    return (
      <>
        {isActive ? (
          <Hom>
            {choicesList.map(each => (
              <Item click={this.click} item={each} />
            ))}
          </Hom>
        ) : (
          <Game item={sel} click={this.click} />
        )}
      </>
    )
  }
}
export default Home
