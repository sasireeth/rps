import {Component} from 'react'
import CartContext from '../../context/CartContext'
import {Img, Hom, But} from './styledComponents'

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
  state = {sel: [], isActive: true}

  click = () => {
    this.setState(pre => ({isActive: !pre.isActive}))
  }

  render() {
    const {isActive} = this.state
    return (
      <>
        {isActive ? (
          <Hom>
            {choicesList.map(each => (
              <But
                onClick={this.click}
                type="button"
                className="btn"
                data-testid={each.testid}
              >
                <Img src={each.imageUrl} alt="your choice" />.
              </But>
            ))}
          </Hom>
        ) : (
          <Game item={choicesList[1]} />
        )}
      </>
    )
  }
}
export default Home
