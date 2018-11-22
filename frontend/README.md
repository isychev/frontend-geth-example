### Frontend BlockChain

An example of working with the library geth with Web3js

The application implements a simple data transfer through the blockchain.
Blockchain is implemented using [geth](https://github.com/ethereum/go-ethereum). The frontend communicates with blockchain with [web3js](https://github.com/ethereum/web3.js).

####Installation
The application supports docker
```text
 git clone https://github.com/isychev/frontend-geth-example.git 
 cd frontend-geth-example
 docker-compose up
```
open localhost:3000


### Description

The blockchain executes a simple smart-contract in which work with one logical value is implemented. 
```solidity
pragma solidity ^0.4.22;

contract BoolTransfer
{
	bool superData;

	constructor() public
	{
		superData = true;
	}

	setBool(bool _superData) public
	{
		superData = _superData;
	}

	getBool() public view returns(bool)
	{
		return superData;
	}
}

```

#### The main file of the blockchain

**blockchain/BoolTransfer.sol** - smart-contract

**blockchain/superBool/superBool.json** - geth config file

**blockchain/superBool/keystore** - the folder contains files for signing transactions

**frontend/src/abi.js** - geth abi [more...](https://solidity.readthedocs.io/en/develop/abi-spec.html)

**frontend/src/byteCode.js** - byte code of smart-contract

###№ Work principle

When entering the site, a new smart contact is generated
```js                     
const web3 = new Web3(new Web3.providers.HttpProvider(GETH_PORT));
const firstContractInstance = await new web3.eth.Contract(abi);
```
 and sent to the blockchain 

```js
const web3 = new Web3(new Web3.providers.HttpProvider(GETH_PORT));
const firstContractInstance = await new web3.eth.Contract(abi); 
```