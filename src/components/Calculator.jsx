import Circle from './Circle'
import LoveText from './LoveText'

const seedrandom = require('seedrandom')
const Calculator = ({ seed, name1, name2 }) => {
  const number = new seedrandom(seed)
  const value = seed === '' ? 0 : Math.round(number() * 100)

  return (
    <div id="results" className="flex flex-col justify-center items-center ">
      <Circle value={value} />
      <LoveText name1={name1} name2={name2} value={value} />
    </div>
  )
}

export default Calculator
