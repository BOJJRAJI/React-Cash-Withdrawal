import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawCash = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-container">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-container">
              <p className="cash">{amount}</p>
              <p className="rupees-para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cards-list">
            {denominationsList.map(eachList => (
              <DenominationItem
                itemDetails={eachList}
                key={eachList.id}
                withdrawCash={this.withdrawCash}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
