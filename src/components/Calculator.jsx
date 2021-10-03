const seedrandom = require('seedrandom')
const Calculator = ({ seed }) => {
  let number = new seedrandom(seed)
  return <div>{number()}</div>
}

export default Calculator
