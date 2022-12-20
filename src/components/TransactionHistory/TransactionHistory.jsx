import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  {transactions.map(({id, amount, type, currency})=> <tbody key={id}>
    <tr >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>    
  </tbody>)}
</table>

TransactionHistory.propTypes = {
  id:PropTypes.number,
  
  amount:PropTypes.number,
 type:PropTypes.string,
    currency:PropTypes.string,
}