FROM ethereum/client-go:stable

WORKDIR /root/.ethereum

COPY ./ /root/.ethereum

RUN geth --nodiscover --datadir=/root/.ethereum/superBool init /root/.ethereum/superBool/superBool.json

#RUN geth --nodiscover --datadir=/root/.ethereum/superBool --unlock 0xad8f9414f5f0fff9cb4ea2330b60f8a0a30951ab --password  /root/.ethereum/superBool/password --mine --rpc --rpcaddr localhost --rpcapi eth,net,web3,personal console

ENTRYPOINT exec geth --nodiscover --datadir=/root/.ethereum/superBool --unlock 0xad8f9414f5f0fff9cb4ea2330b60f8a0a30951ab --password  /root/.ethereum/superBool/password --mine --rpc --rpcport 7545 --rpcapi eth,net,web3,personal