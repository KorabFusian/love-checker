const LoveText = ({ name1, name2, value }) => {
  if (name1 === '' || name2 === '')
    return <p className="invisible">stuff here</p>
  else if (value < 34)
    return (
      <p>
        Yikes, <b>{name1}</b> and <b>{name2}</b> are only <b>{value}%</b>{' '}
        compatible...
      </p>
    )
  else if (value < 67)
    return (
      <p>
        <b>{name1}</b> and <b>{name2}</b> are <b>{value}%</b> compatible !
      </p>
    )
  else
    return (
      <p>
        Wow, <b>{name1}</b> and <b>{name2}</b> are <b>{value}%</b> compatible !
      </p>
    )
}

export default LoveText
