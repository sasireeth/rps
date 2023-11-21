import Rule from '../Rule'
import './index.css'

const Rules = () => {
  const pop = () => <Rule />
  return (
    <button type="button" onClick={pop}>
      RULES
    </button>
  )
}
export default Rules
