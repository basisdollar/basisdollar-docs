---
id: CashPools
title: Cash Pools
---

---

## Treasury

The Basis Dollar Treasury exists to enable bond-to-cash redemptions. Basis Dollar Bonds redeemed via the Treasury automatically returns the user an equal number of Basis Dollar, provided that: **1)** the oracle price of the Basis Dollar is above 1 DAI, and **2)** the Treasury contract has a positive balance of the Basis Dollar.

Disallowing redemptions when the Basis Dollar price is below 1 DAI prevents bond holders from prematurely cutting their losses and creating unnecessary downward pressure on the price of BSD.

In addition, as the price of BSD is likely to experience significant volatility during its phase of initial distribution (first 5 days), the Treasury is scheduled to start after initial distribution concludes (starting from **day 6** of launch). This is to grant the BSD market enough time to stabilize, after which the protocol makes effective use of the stabilization mechanism to prevent further deviations in price.

## The Seigniorage Stake

The Seigniorage Stake allows Basis Dollar Share holders to claim excess Basis Dollar minted by the protocol. Holders of Basis Dollar Shares can stake their BSDS to the Seigniorage Stake contract, which by doing so, they can claim a pro-rata share of Basis Dollar tokens assigned to the Seigniorage.

As disclosed in the Parameters section, there is a lock up of 2 Epochs (24 hours) for rewards and 4 Epochs (48 hours) for BSDS Stakers.
