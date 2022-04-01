import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/Wallet.css';
// import quotationAPI from '../service/quotationAPI';
import fecthQuotationAPI from '../actions/wallet';

class Wallet extends React.Component {
  async componentDidMount() {
    const { currencie } = this.props;
    // const data = await quotationAPI();
    // const moedas = Object.keys(data);
    // const moedasCode = moedas.filter((elem) => elem !== 'USDT');
    // console.log(data);
    // console.log(moedas);
    // console.log(moedasCode);
    currencie();
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header className="wallet-header">
        <h1 className="wallet-title">TrybeWallet</h1>
        <div className="user-info">
          <p>
            Usuário:
            {' '}
            <span data-testid="email-field">{ userEmail }</span>
          </p>
          <p>
            Despesa total:
            {' '}
            <span data-testid="total-field">0</span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currencie: (state) => dispatch(fecthQuotationAPI(state)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
