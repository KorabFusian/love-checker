import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Circle = ({ value }) => {
  const getColor = () => {
    if (value < 33) return 'black'
    else if (value > 66) return 'rgba(244, 114, 182)'
    else return 'rgba(251, 191, 36)'
  }

  return (
    <div className="mt-4 mb-6">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: getColor(),
          textColor: getColor(),
        })}
      />
    </div>
  )
}

export default Circle
