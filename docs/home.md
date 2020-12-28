---
id: Home
title: Home
sidebar_label: Home
slug: /
---

Welcome to the Basis Dollar documentation!

---

**Basis Dollar** is an open-source, permissionless algorithmic stablecoin.

The Basis Dollar protocol aims to revive the original vision of [Basis.io](https://basis.io), initially released as a lightweight implementation on the **Ethereum** blockchain.

Adding ideas and innovations made since the original Basis project shut down, the Basis Dollar team has made modifications to the original mechanism outlined with its [whitepaper]("#"). Read on for further details.

Another similar project has been built based on the original Basis project i.e. Basis.Cash. Based on our observations of that project and taking into account our experiences elsewhere, the Basis Dollar team has made serveral improvements over Basis Cash, notably:

- Price feed oracle based on the average of 2 liquidity pool pairs (i.e. BSD/USDC and BSD/DAI) which is more difficult to manipulate.
- The protocol uses Time-weighted Average Price (TWAP), not Exponential Moving Average (EMA), for the price. Time-weighted is more accurate and less subject to attack vectors.
- The epoch duration for expansion (minting new supply) is reduced to 12 hours. This allows the protocols to be more responsive to deviations from the peg.
- The protocol caps the newly minted BSD in the case of expansion to a maximum of 15% of the total supply during each epoch. This prevents over-inflation, and is balanced out by the fact that epochs are shorter.
- The debt issued is capped at 30% supply (maximum Basis Dollar Bonds generated for each contraction). Similarly, this prevents over-deflation.
- The Basis Dollar Bonds have no expiry date. This reduces investor risk on total capital loss of the bonds.
- The protocol keeps a minimum of 35% of the expanded supply for seigniorage shares for each expansion, which is an improvement over Basis Dollar which keeps all the new supply for Bond redemption if the balance is less than 1000 BSD.
- Use of ValueLiquid as a farm and swap pool as it it more gas-efficient in the long run.

In addition, we propose a longer and fairer distribution schedule, as outlined in the [Launch Strategy](https://docs.basisdollar.fi/LaunchStrategy) section.
