import Circle from './Circle'

const seedrandom = require('seedrandom')
const Calculator = ({ seed, name1, name2 }) => {
  const number = new seedrandom(seed)
  const value = Math.round(number() * 100)

  if (seed === '' || name1 === '' || name2 === '') return <></>
  else
    return (
      <div id="results" className="flex flex-col justify-center items-center ">
        <Circle value={value} />
        {name1} and {name2} are {value}% compatible !
      </div>
    )
}

export default Calculator
