import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/Table.css';
// import { deleteTask } from '../actions';

class Table extends Component {
  // handleDelete = ({ target }) => {
  //   const { delTask } = this.props;
  //   delTask(target.value);
  // }

  render() {
    const { expen, handleDelete } = this.props;
    return (
      <div className="table-container">
        <h1 className="title">Despesas Totais</h1>
        <table className="table">
          <thead className="table-head">
            <tr className="head-tr">
              <th className="head-td">Descrição</th>
              <th className="head-td">Tag</th>
              <th className="head-td">Método de pagamento</th>
              <th className="head-td">Valor</th>
              <th className="head-td">Moeda</th>
              <th className="head-td">Câmbio utilizado</th>
              <th className="head-td">Valor convertido</th>
              <th className="head-td">Moeda de conversão</th>
              <th className="head-td">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {
              expen.map((desp) => {
                const valor = Number(desp.value);
                const moeda = desp.exchangeRates[desp.currency].name;
                const cambio = Number(desp.exchangeRates[desp.currency].ask);
                const conv = valor * cambio;
                return (
                  <tr className="body-tr" key={ desp.id }>
                    <td className="body-td">{ desp.description }</td>
                    <td className="body-td">{ desp.tag }</td>
                    <td className="body-td center">{ desp.method }</td>
                    <td className="body-td">{ valor.toFixed(2) }</td>
                    <td className="body-td">{ moeda }</td>
                    <td className="body-td">{ cambio.toFixed(2) }</td>
                    <td className="body-td">{ conv.toFixed(2) }</td>
                    <td className="body-td">Real</td>
                    <td className="body-td">
                      <button
                        type="button"
                        data-testid="delete-btn"
                        className="delete-btn"
                        value={ desp.id }
                        onClick={ handleDelete }
                      >
                        Excluir
                      </button>
                    </td>
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

// const mapDispatchToProps = (dispatch) => ({
//   delTask: (tasks) => dispatch(deleteTask(tasks)),
// });

Table.propTypes = {
  expen: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Table);
