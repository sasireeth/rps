import CartContext from '../../context/CartContext'
import {Header1, Headercon1, Headercon2} from './styledComponents'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {score} = value
      return (
        <Header1>
          <Headercon1>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </Headercon1>
          <Headercon2>
            <h1>Score</h1>
            <p>{score}</p>
          </Headercon2>
        </Header1>
      )
    }}
  </CartContext.Consumer>
)
export default Header
