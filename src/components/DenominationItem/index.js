import './index.css'

const DenominationItem = props => {
  const {itemDetails, withdrawCash} = props
  const {value} = itemDetails

  function onWithdrawCash() {
    withdrawCash(value)
  }

  return (
    <li className="list-cash">
      <button className="button" type="button" onClick={onWithdrawCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
