import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/Wallet.css';
import fecthQuotationAPI from '../actions/wallet';
import Form from '../components/Form';
import Table from '../components/Table';
import { deleteTask } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { currencie } = this.props;
    currencie();
    this.changeTotal();
  }

  // Ajuste do valor atualizado sem o state do componente com o Danillo
  changeTotal = () => {
    const { expen } = this.props;
    const totalDep = expen.map((elem) => {
      const moeda = Object.values(elem.exchangeRates)
        .filter((key) => key.code === elem.currency && key.codein !== 'BRLT');
      return Number(moeda[0].ask * elem.value);
    });
    let despesaTotal = 0;
    if (totalDep.length !== 0) {
      for (let i = 0; i < totalDep.length; i += 1) {
        despesaTotal += +totalDep[i];
      }
      return despesaTotal.toFixed(2);
    }
    return 0;
  };

  // Ajuda de onde fazer a função delete com o André Felipe
  handleDelete = async ({ target }) => {
    const { delTask } = this.props;
    await delTask(target.value);
    this.changeTotal();
  }

  render() {
    const { userEmail, expen } = this.props;
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
              <span data-testid="total-field">{ this.changeTotal() }</span>
              {' '}
              <span data-testid="header-currency-field">BRL</span>
            </p>
          </div>
        </header>
        <Form handleClick={ this.changeTotal } />
        { expen.length > 0
        && <Table handleDelete={ this.handleDelete } /> }
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
  delTask: (tasks) => dispatch(deleteTask(tasks)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
  expen: PropTypes.arrayOf(PropTypes.any),
  currencie: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
