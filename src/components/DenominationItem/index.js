import './index.css'

const DenominationItem = props => {
  const {item, WithdrawAmount} = props
  const {id, value} = item

  return (
    <li className="list-item">
      <button
        type="button"
        className="button"
        onClick={() => WithdrawAmount(value)}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
