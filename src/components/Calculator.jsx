const seedrandom = require('seedrandom')
const Calculator = ({ seed, name1, name2 }) => {
  const number = new seedrandom(seed)

  const getPercent = () => {
    return Math.round(number() * 100).toString() + '%'
  }

  if (seed === ' ') return <></>
  else
    return (
      <div>
        {name1} and {name2} are {getPercent()} compatible !
      </div>
    )
}

export default Calculator
