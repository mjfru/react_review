import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

//! Legacy Way of Connecting Components:
function mapStateToProps(state) {
  return {
    // Prop name
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
