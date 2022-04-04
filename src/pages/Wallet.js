import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/Wallet.css';
import fecthQuotationAPI from '../actions/wallet';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  async componentDidMount() {
    const { currencie } = this.props;
    currencie();
  }

  changeTotal = () => {
    const { expen } = this.props;
    const totalDep = expen;
    const askTotal = totalDep.map((elem) => {
      const moeda = Object.values(elem.exchangeRates)
        .filter((key) => key.code === elem.currency && key.codein !== 'BRLT');
      return Number(moeda[0].ask * elem.value);
    });
    let despesaTotal = 0;
    if (askTotal.length !== 0) {
      for (let i = 0; i < askTotal.length; i += 1) {
        despesaTotal += +askTotal[i];
      }
      this.setState({
        total: despesaTotal.toFixed(2),
      });
    }
  };

  render() {
    const { userEmail, expen } = this.props;
    const { total } = this.state;
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
              <span data-testid="total-field">{ total }</span>
              {' '}
              <span data-testid="header-currency-field">BRL</span>
            </p>
          </div>
        </header>
        <Form handleClick={ this.changeTotal } />
        { expen.length > 0 && <Table /> }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expen: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currencie: (state) => dispatch(fecthQuotationAPI(state)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
