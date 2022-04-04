import React, { Component } from 'react';

class Table extends Component {
  render() {
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
            <tr>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
              <td>descrição</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
