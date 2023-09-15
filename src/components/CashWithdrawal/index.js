import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdrawAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-container">
            <div className="profile-icon-container">S</div>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-display-container">
              <p className="amount">{amount}</p>
              <p className="rupees-para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-option-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-lists">
            {denominationsList.map(item => (
              <DenominationItem
                item={item}
                key={item.id}
                WithdrawAmount={this.onWithdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
