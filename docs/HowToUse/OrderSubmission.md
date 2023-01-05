---
title: Order Submission
sidebar_label: Order Submission
---

In order to submit an order into Dexpresso, using the [trading app interface](https://trade.dexpresso.exchange), users need to employ _non-costudial_ wallets, sch as _Metamask_. At first (before connecting to user's wallet), the trade page only presents live status of different markets of the selected blockchain network and their related orderbook's open interests. The process of connecting to user's wallet starts right after user clicks on any *connect* button on the page as is shown in the Figure below. The user is requested to sign the message *"Login to Dexpresso"* that verifies ownership of the wallet by the user:

<img src={require('./media/submit_order_1.jpg').default} 
 width="500"/>

After each change in the network dropdown (top right of the page), the user should provide the same message signature to Dexpresso.

:::note
We note that Dexpresso collects no data regarding user's login status and the entire login process is to ensure ownership of the connect wallet's address by the user. This is a necessary step before providing the authenticated user with the order history information or ability ot cancel previousorders by the user after a succesful login to Dexpresso.
:::

:::tip
Submitting order in some blockchains, such as *zkSync_v1* requires user to sign a allownce message regarding status of the user's wallet on that blockchain to Dexpresso (shown in figure below). We note that there are no spending previlages in this signature and Dexpresso requires user signature *per order* before being able to exchange user assets. This hold true for all blockchain networks, including *zkSync_v1*.
:::

<img src={require('./media/submit_order_2.jpg').default} 
 width="500"/>

After a successful Login, the users wallet address will be shown in top right of the page. Clicking on this address will provide users with a dropdown indicating user's balance on the blockchain. Morevoer, the spot-box will be available for users to submit orders on any market under the chosen blockchain network.

<img src={require('./media/submit_order_3.jpg').default} 
 width="500"/>

Users can place both *limit* and *market* orders. After filling order price and desired amount, the process of submitting order starts with pressing sell/buy button. At this point, user is required to sign the raw order message as is shown in figure below. 

:::note
It is not possible for anyone (including Dexpresso) to spend user assets with this order signature. In order words, the order signature gives no previlage nor any allowance to anyone to transfer user assets without exchanging user's quote asset with user's desired price. The signature is only valid for exchanging assets with a matching opposite order (inside Dexpresso swap contract or natively on zkSync_v1 network).
:::

<img src={require('./media/submit_order_4.jpg').default} 
 width="500"/>

:::info
In EVM-based networks, such as Ethereum, Fantom, and even Tron, users need to approve Dexpresso swap contract with the token they wish to spend on the order submission. This approve is only given once and therefore will be requested if user did not approve the contract before request for signing the order. Figure below presents the trading app requesting user tp approve Dexpresso swap contract for a ceratin token that he/she wishes to sell.
:::


<img src={require('./media/submit_order_5.jpg').default} 
 width="500"/>

After successfully signing the order, it will be once more verfied in the Dexpresso server before insertaion into the order book. The Dexpresso server checks the signature, accounts's on-chain balances and allowance status of the spending token for the Dexpresso swap contract. If all checks pass, the user can now see his/her order in the order history (buttom right area of the page) as is shown below.

<img src={require('./media/submit_order_6.jpg').default} 
 width="500"/>

