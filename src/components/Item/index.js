import {Component} from 'react'
import {Img, Hom, But} from './styledComponents'

const Item = props => {
  const {click, item} = props
  const {testid, imageUrl, id} = item
  const cl = () => {
    click(item)
  }
  return (
    <But onClick={cl} type="button" className="btn" data-testid={testid}>
      <Img src={imageUrl} alt="your choice" />.
    </But>
  )
}
export default Item
