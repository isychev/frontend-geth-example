#!/bin/bash
if [ ! -f /root/.ethereum/superBool/superBool.json ]; then
    echo "superBool.json not found!"
    exit 404
fi

echo "delete old files"
rm -rf /root/.ethereum/superBool/geth
rm -f /root/.ethereum/superBool/geth.ipc

echo "geth init start"
geth --nodiscover --datadir=/root/.ethereum/superBool init /root/.ethereum/superBool/superBool.json
echo "geth init success"

echo "geth start"
geth --nodiscover --datadir=/root/.ethereum/superBool --unlock 0xad8f9414f5f0fff9cb4ea2330b60f8a0a30951ab --password  /root/.ethereum/superBool/password --mine --rpc --rpcaddr 0.0.0.0 --rpccorsdomain="*" --rpcapi eth,net,web3,personal