---
id: StabilizationMechanism
title: Stabilization Mechanism
---

---

The Basis Dollar protocol is designed to guarantee Basis Dollar tokens to be exchanged at a value of a single US dollar, with the stabilizer (in-protocol stability mechanism) in charge of matching the supply of Basis Dollar to their demand.

Every 12 hours, the **time-weighted average** of the BSD-DAI and BSD-USDC exchange rate is read from the Value Liquid contract, which is then fed into the Basis Dollar protocol to be referenced by its stability mechanism.

The stabilization mechanism is triggered whenever the price of Basis Dollar is observed to be above / below (1+ε) DAI, where ε is a parameter that defines the range of price stability for the BAC token. On launch, ε is set to be 0.05.

## Contractionary Policy

At any point in time, Basis Dollar Bonds can be bought from the protocol in exchange for Basis Dollar. Purchases of the Bonds are performed at an algorithmically set price. With a Basis Dollar oracle price of P DAI, bonds are sold off at a price of P BSD (effective price being P^2 DAI), promising bond holders a premium when redeemed. Purchased bonds can be converted to Basis Dollar, insofar as the preconditions are met and the Treasury is not empty.

Bonds can still be purchased even when Basis Dollar trades above 1 DAI (P > 1), however this nets the purchaser a loss when redeemed. For example, when 1 BSD = 1.1 DAI, a Bond is sold for 1.1 BSD. Since all Bonds can only be redeemed for 1 BSD, this yields the purchaser a net loss. Thus, bond purchases are only expected to occur when 1 BSD trades below 1 DAI. Although bond purchases at a BSD price above 1 USD are allowed in the contract, it is disabled in the Basis Dollar frontend to avoid user confusion.

## Expansionary Policy

If the price of Basis Dollar is observed to be higher than (1+ε) DAI, the system mints **totalSupply \* (oraclePrice-1)** number of new Basis Dollar tokens. The issued Basis Dollar is either deposited to the Treasury or the Seigniorage, depending on the Basis Dollar balance of the Treasury.

If the Treasury has a balance above 1,000 Basis Dollar, then it is logical to assume that either all bonds have been already redeemed, or no bond holder is currently willing to perform a redemption. Either way, this signals that the demand for bond redemption does not exist at this time, and thus the freshly minted Basis Dollar is given to the Seigniorage contract.

However, if the Treasury has a balance of below 1,000 Basis Dollar, then it is assumed that there will be additional demand for bond-to-cash redemption. Therefore, the issued Basis Dollar is routed to the Treasury so that Basis Dollar Bond holders can exercise redemptions.
