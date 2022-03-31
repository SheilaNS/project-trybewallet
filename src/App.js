import React, { Component } from 'react';
import Routes from './Routes';
// import quotationAPI from './service/quotationAPI';

class App extends Component {
  // async componentDidMount() {
  //   console.log(await quotationAPI());
  // }

  render() {
    return <Routes />;
  }
}

export default App;
