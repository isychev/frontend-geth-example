import React, { Component } from 'react';
import * as Web3 from 'web3';
import byteCode from './byteCode';
import abi from './abi';
import logo from './logo.svg';
import './App.css';

const ADDRESS = '0xad8f9414f5f0fff9cb4ea2330b60f8a0a30951ab';

class App extends Component {
  async componentWillMount () {
    const deployParams = {
      data: byteCode,
      arguments: [],
    };
      const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8546'));
    console.log(web3.eth.accounts)
      console.log('SUCCESS')
      const firstContractInstance = await new web3.eth.Contract(abi);
    console.log('before contractInstance')
      const contractInstance =  await firstContractInstance.deploy(deployParams).send({
        from: ADDRESS,
        gas: 300000,
      });
    console.log('contractInstance')
    console.log(contractInstance)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <input type="checkbox" id="switch"/><label htmlFor="switch">Toggle</label>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
