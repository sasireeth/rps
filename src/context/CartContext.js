import React from 'react'

const CartContext = React.createContext({
  score: 0,
  isActive: true,
  incrementScore: () => {},
  decrementScore: () => {},
  change: () => {},
})

export default CartContext
