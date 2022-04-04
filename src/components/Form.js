import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/Form.css';
import PropTypes from 'prop-types';
import fetchQuotationToWallet from '../actions/rates';
import { recieveWalletInfo } from '../actions';

const ali = 'Alimentação';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ali,
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { getWallet, getRates, handleClick } = this.props;
    await getRates();
    const { rates } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const save = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: rates,
    };
    getWallet(save);
    this.setState((before) => ({
      id: before.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ali,
    }));
    handleClick();
  }

  render() {
    const { curr } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="expenses-form" type="submit" onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            id="value-input"
            className="value-input"
            name="value"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            id="description-input"
            name="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-select">
          Moeda:
          {' '}
          <select
            id="currency-select"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              curr.map((elem, index) => (
                <option key={ index } value={ elem }>{elem}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          {' '}
          <select
            id="method-input"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Categoria:
          {' '}
          <select
            id="category-input"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value={ ali }>Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  curr: state.wallet.currencies,
  rates: state.wallet.rates,
});

const mapDispatchToProps = (dispatch) => ({
  getRates: (state) => dispatch(fetchQuotationToWallet(state)),
  getWallet: (wallet) => dispatch(recieveWalletInfo(wallet)),
});

Form.propTypes = {
  curr: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
