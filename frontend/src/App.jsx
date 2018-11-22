import React, { Component } from 'react';
import * as Web3 from 'web3';
import byteCode from './byteCode';
import abi from './abi';
import logo from './logo.svg';
import './App.css';

const ADDRESS = '0xad8f9414f5f0fff9cb4ea2330b60f8a0a30951ab';

const GAS = 470000;

const SEND_PARAMS = {
  from: ADDRESS,
  gas: GAS,
};

const GETH_PORT = 'http://localhost:8545';

class App extends Component {
  state = {
    checked: true,
    sending: false,
    ready: false,
  };
  async componentWillMount() {
    const deployParams = {
      data: byteCode,
      arguments: [],
    };
    const web3 = new Web3(new Web3.providers.HttpProvider(GETH_PORT));
    const firstContractInstance = await new web3.eth.Contract(abi);

    this.contract = await firstContractInstance
      .deploy(deployParams)
      .send(SEND_PARAMS);

    this.setState({
      ...this.state,
      ready: true,
    });

    this.updateCheckboxValue();
  }

  async updateCheckboxValue() {
    const { checked } = this.state;
    const contractChecked = await this.contract.methods.getBool().call();
    if (checked !== contractChecked) {
      this.setState({
        checked: contractChecked,
        sending: false,
      });
    }
    setTimeout(() => {
      this.updateCheckboxValue();
    }, 1000);
  }

  toggleCheckbox = () => {
    const { ready, sending, checked } = this.state;
    if (ready && !sending) {
      this.setState({
        ...this.state,
        sending: true,
      });
      this.contract.methods.setBool(!checked).send(SEND_PARAMS);
    }
  };

  render() {
    const { checked, ready } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.ready ? (
            <div style={{ marginBottom: '3rem' }}>
              <input
                type="checkbox"
                id="switch"
                onClick={this.toggleCheckbox}
                checked={checked}
                disabled={!ready}
              />
              <label htmlFor="switch">Toggle</label>
            </div>
          ) : (
            <h2>Инициализация смарт-контакта. Подождем ...</h2>
          )}

          {this.state.sending ? (
            <h2>Изменения отправлены в BlockChain. Подождем ...</h2>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
