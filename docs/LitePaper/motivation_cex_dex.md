---
title: CEX vs. DEX
sidebar_label: CEX vs. DEX
---

# Centralized vs. Decentralized
There are two types of exchange platforms in terms of coustodial mechanism: 1) Centralized (CEX) and 2) Decentralized (DEX). We provide a general overview of each approach and compare them against eachother in the followings.

|  | Centralized (CEX) | Decentralized (DEX) |
|---|:---:|:---:|
| User Privacy  | :x: Requires KYC | :heavy_check_mark: No registration required |
| Security Risks | :x: Threats all users | :heavy_check_mark: Thread each user individually |
| Advanced Trading Tools | :heavy_check_mark: Plenty | :x: Limited |
| Speed | :heavy_check_mark: Almost real-time | :x: usually requires on-chain interactions |
| Fee | :heavy_check_mark: Lower fees | :x:   Higher fees |
| Submission/Cancellation Cost | :heavy_check_mark: Unlimited and free order submission | :x: Usually submission/cancellation do cost <br/> :x: Some DEXs don't allow multiple open orders |
|Censorship & Freedom | :x: Can ban users absed on their identity | :heavy_check_mark: Do not have user identities <br/> :heavy_check_mark: True trustless platforms cannot even ban on-chain addresses |
|Supports Fiat| :heavy_check_mark: Yes | :x: No|

## Centralized Exchange (CEX)
In a centralized platform, users are required to register and proof their identity to the excahnge. Moreover, users transfer their assets (both fiat and crypto) to the wallets provided by the exchage (usually cold-wallet addresses) and charge their profiles in the exchange to become eligibale to trade in using order-books. Although this approach may not be ideal for many users (in terms of privacy and security), however, it has some fundamentally good features, such as:

* free and unlimited order submission/cancelation
* fast and real-time order-books, 
* safe order match procedures. 
* Much easier to implement more advanced order types, including
    * stop-loss
    * trailing stop
    * take profit 
    * one-cancels-other (OCO)

But, centralized platforms do not side with the most fundamental rule of blockchain, which is **trustlessness of the  platform**. In order to submit orders and trade in CEX platforms, user have to:
* Transfer assets (fiat and crypto) to exchange wallets
* Attend a know-your-costumer (KYC) procedure to complete their registeration
* 

## Decentralized Exchange (DEX)
Unlike CEX, in a decentralized platform, users do not need a registration (exposing their identity) in order to use trading features. Moreover, users do not need to have profiles in the exchange and therefore, do transfer their assets to the wallets controlled by the platform. This mechanism ensures that in case of a security threat, each user is responsible for his/her own assets and there is no needed trust on the platform authirity. To summerize, some of the main advantages of a true DEX platform are as follows:
* No KYC
* Complete user anonymity
* No censorship nor any market manipulation by authorities/platform
* Completely trustless trading platform
* No attack exists, which can threat all user assets
* No one/group is in charge of users' assets

However, decentralized approaches usually have limited features compared to the centralized platforms. Additionally, due to the on-chain transactions per trade, it may be not commercially viable for users to employ on-chain order-books in a DEX. Therefore, many platforms propose liqudity pools and swap mechanisms instead of actually implementing a functioning order-books. To summerize,  including:
* higher fee per trade
* slower orderbooks
* Limited features (many DEX platforms do not implement order-book)
* Submission/cancelation of orders costs and is limited in some platforms