import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { curr } = this.props;
    return (
      <form className="expenses-form">
        <label htmlFor="value-input">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            id="value-input"
            name="value-input"
            type="number"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            id="description-input"
            name="description-input"
            type="text"
          />
        </label>
        <label htmlFor="currency-select">
          Moeda:
          {' '}
          <select id="currency-select">
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
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  curr: state.wallet.currencies,
});

Form.propTypes = {
  curr: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(Form);
