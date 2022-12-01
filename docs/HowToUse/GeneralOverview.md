---
title: HowToUse issues
sidebar_label: Overview of the Trade App
---

Dexpresso's main app has an straightforward trading UI/UX that is commonly used and shared among orderbook-based crypto-exchange platforms. We provide a general overview of the trading app UI in the following:

Users can select their market of choice based on the pairs they want to exchange via the _markets_ dropdown or the list of the markets as the bellow figure shows.
<img src={require('./media/tutorials-market-info.png').default} />

For each active market (selected via the markets panel), the UI presents live information of the market, including:
* Orderbook and latest trades of the market
* The summary of the market within last 24 hours
* Live trading chart from [TradingView](https://www.tradingview.com/)

<img src={require('./media/tutorials-trading-view.png').default} />

In order to use the app and trade in Dexpresso, users have to (like any other DEX) connect their wallet of choice to the app. The *Connect Wallet* button initiates a popup that lists a range of widely used safe wallet connection protocol, such as [Metamask](https://metamask.io/) and [WalletConnect](https://walletconnect.com/). Right after successful connection with the user's wallet (after signing login message that proves ownership of the wallet by the user), user's trading and order history alongside his/her open orders in the active netwotk (blockchain) will be accessible through the window at the butom-right of the UI. 

The network selection dropdown helps users to choose the blockchain they want to trade in. Furthermore, after selecting the target network and the pair user wishes to trade in, he/she can use the order submission interface at the buttom-left of the UI as is shown in the figure bellow:

<img src={require('./media/tutorials-user-tools.png').default} />