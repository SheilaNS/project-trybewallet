import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        TrybeWallet
        <div>
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

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
