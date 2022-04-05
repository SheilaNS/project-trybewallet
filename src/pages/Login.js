import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import recieveUserInfo from '../actions/user';
import '../assets/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  // Referência da validação do e-mail:
  // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { password, email } = this.state;
      const SEIS = 6;
      const valisEmail = /\S+@\S+\.\S+/;
      const emailOk = valisEmail.test(email);
      const validPass = password.length >= SEIS;
      if (emailOk && validPass) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  };

  handleClick = () => {
    const { getUserInfo } = this.props;
    const { password, email } = this.state;
    const userInfo = ({ email, password });
    getUserInfo(userInfo);
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="login-container">
        <div className="login">
          <label htmlFor="email" className="email-login">
            E-mail:
            {' '}
            <input
              data-testid="email-input"
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password" className="senha-login">
            Senha:
            {' '}
            <input
              data-testid="password-input"
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              className="login-btn"
              type="button"
              disabled={ disabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (state) => dispatch(recieveUserInfo(state)),
});

Login.propTypes = {
  getUserInfo: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
