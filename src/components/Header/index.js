import CartContext from '../../context/CartContext'
import {Header1, Headercon1, Headercon2, Score} from './styledComponents'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {score} = value
      return (
        <Header1>
          <Headercon1>
            <h1>
              Rock <br />
              Paper
              <br /> Scissors
            </h1>
          </Headercon1>
          <Headercon2>
            <p>Score</p>
            <Score>{score}</Score>
          </Headercon2>
        </Header1>
      )
    }}
  </CartContext.Consumer>
)
export default Header
