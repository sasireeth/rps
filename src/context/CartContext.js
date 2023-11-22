import React from 'react'

const CartContext = React.createContext({
  score: 0,
  incrementScore: () => {},
  decrementScore: () => {},
})

export default CartContext
