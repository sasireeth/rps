import {Component} from 'react'
import {Img, Hom, But} from './styledComponents'
import CartContext from '../../context/CartContext'

const Item = props => {
  const {click, item} = props
  const {testid, imageUrl, id} = item
  const cl = () => {
    click(item)
  }
  return (
    <But onClick={cl} type="button" data-testid={testid}>
      <Img src={imageUrl} alt={id} />.
    </But>
  )
}
export default Item
