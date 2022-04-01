import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/Wallet.css';
import fecthQuotationAPI from '../actions/wallet';
import Form from '../components/Form';

class Wallet extends React.Component {
  // async componentDidMount() {
  //   const { currencie } = this.props;
  //   currencie();
  // }

  render() {
    const { userEmail, currencie } = this.props;
    currencie();
    return (
      <>
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
        <Form />
      </>
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
