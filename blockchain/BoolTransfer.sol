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