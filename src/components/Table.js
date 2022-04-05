import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expen } = this.props;
    return (
      <div>
        <h1>Despesas Totais</h1>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expen.map((desp) => {
                const valor = Number(desp.value);
                const moeda = desp.exchangeRates[desp.currency].name;
                const cambio = Number(desp.exchangeRates[desp.currency].ask);
                const conv = valor * cambio;
                return (
                  <tr key={ desp.id }>
                    <td>{ desp.description }</td>
                    <td>{ desp.tag }</td>
                    <td>{ desp.method }</td>
                    <td>{ valor.toFixed(2) }</td>
                    <td>{ moeda }</td>
                    <td>{ cambio.toFixed(2) }</td>
                    <td>{ conv.toFixed(2) }</td>
                    <td>Real</td>
                    <td>Editar/excluir</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expen: state.wallet.expenses,
});

Table.propTypes = {
  expen: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Table);
