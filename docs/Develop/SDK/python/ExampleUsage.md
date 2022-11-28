---
title: Develop issues
sidebar_label: Example
---

# Example Usage
Following examples submit a limit order on ZkSyncV1 testnet (on Goerli) and Fantom Mainnet networks.
For the start, let's import `get_easy_client` method from `dexpresso`, which provides easy interactions with Dexpresso without getting involved into details. The `Configs` is required to pass network configurations to the client in a safer manner (the provider URL and chainId are hardcoded to prevent mistakes): 
```
import os
from decimal import Decimal

from dexpresso.EasyClient import get_easy_client
from dexpresso import Configs
```
The following line is only required if you are about to use zkSyncV1 network. The `ZK_SYNC_LIBRARY_PATH` is required by the [zkSync's python library](https://docs.zksync.io/api/sdk/python/tutorial/) itself and can be downloaded from [here](https://github.com/zksync-sdk/zksync-crypto-c/releases):
```
os.environ['ZK_SYNC_LIBRARY_PATH'] = os.path.join(os.path.dirname(__file__),
                                                  'zksync_lib/zks-crypto-x86_64-unknown-linux-gnu.so')
```
Now the easy client object can be instantiated by specifying the chosen network and the private key:
```
wallet_privkey = 'RAW_PRIVKEY_HEX'

#### Get network object for zksync_v1
net_obj = Configs.ZkSyncOneTestnet()
#### or get network object for Fantom
net_obj = Configs.FantomMainnet()

print("creating client . . .")
ezcl = get_easy_client(net_obj, wallet_privkey)
```
The rest of the code are independent of what network you use. In the followings, we get markets info and stats, respectively. 
```
print("getting markets info . . . ")
res = ezcl.get_markets_info()
print("markets info:\n", res)

print("getting markets stats . . . ")
res = ezcl.get_markets_stats()
print("markets stats:\n", res)
```
Before submitting orders or being able to get account's order lists and history, you are required to prove to the Dexpresso that you own the private key of the address. Therefore, you need to sign a custom message and send it to Dexpresso. The `authenticate` function does all that for simplicity: 
```
print("Logging into Dexpresso . . . ")
res = ezcl.authenticate()
access_token = res["access_token"]
print("auth. result:\n", res)
```
For submitting an order, the `easy_client` takes care of all required signatures and securely submits it via Dexpresso's API interface:
```
print("Submitting order using the JWT token from login . . .")
res = ezcl.create_and_submit_order(
    'ETH-USDC',
    'buy',
    Decimal(1025.56),
    Decimal(0.01),
    3600,
    Decimal(0.01)
)

print("Order submission result:\n", res)

```
