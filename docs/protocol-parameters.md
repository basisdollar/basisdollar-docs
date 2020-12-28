---
id: ProtocolParameters
title: Parameters
---

Below is a list of all of the implemented parameters for the Basis Dollar protocol.

---

## Basics

- Epoch Length: **12 Hours**
- BSDS Lockup: **2 Epochs for rewards and 4 Epochs for BSDS Stakers**

## Supply Mechanics

### Oracle

- Source: [ValueLiquid BSD/USDC pair](https://valueliquid.info/pool/0xcdd2bd61d07b8d42843175dd097a4858a8f764e7)
- Source: [ValueLiquid BSD/DAI pair](https://valueliquid.info/pool/0xc1b6296e55b6ca1882a9cefd72ac246acde91414)
- Method: ValueLiquid Time Weighted Average Price (TWAP)
- Weighted Dollar Price (WDP) = (TWAP(USDC)*Liquidity(BSD/USDC pair) + TWAP(DAI)*Liquidity(BSD/DAI pair))/
  ( Liquidity(BSD/USDC pair)+Liquidity(BSD/DAI pair) )
- Oracle Minimum: **10,000 WDP**
- Period: **1 Epoch** (12 Hours)

### Supply/Debt Expansion

#### Expansion ($BSD Price > 1$)

**WDP above 1$ where amount of $BSD in Treasusy contract >= totalSuppy of $BSDB (Basis Dollar Bond)**

- Maximum Supply Expansion: **4.5%**
- Expansion Percentage: `WDPrice - 1 * 100` or 4.5% (whichever is lower)
- Expansion Distribution:
  - Seigniorage Stakers: **100%**
  - Redeemable: **0%**

**WDP above 1$ where amount of $BSD in Treasusy contract < totalSuppy of $BSDB (Basis Dollar Bond)**

- Maximum Supply Expansion: **9%**
- Expansion Percentage: `WDPrice - 1 * 100` or 9% (whichever is lower)
- Expansion Distribution:
  - Seigniorage Stakers: **35%**
  - Redeemable: **65%**

#### Contraction ($BSD Price < 1$)

**WDP below 1$**

- Maximum Supply Expansion: **0%**
- Maximum Debt Expansion: **4.5%**
- Expansion Percentage: `1 - WDPrice * 100` or 4.5% (whichever is lower)
- Expansion Distribution:
  - Seigniorage Stakers: **0%**
  - Redeemable: **0%**

### Basis Dollar Bonds

- Max debt ratio: **35%**

## Governance

### Protocol Governance

- Platform: [**BSD DAO**](https://dao.basisdollar.fi)
- On-Chain: **Yes**
- Voting Length: **6 Epochs**
- Proposal expiry: **3 Epochs** (If not committed after successful vote)
- Proposal Threshold: **0.5%** of BSDS LPs in BSDS/DAI and BSDS/USDC, or BSDS stakers in Seigniorage Stake
- Voting Quorum: **20%**
- Super Majority: **66%**
- Emergency Delay: **3 Epochs**

### DAO fund Governance

- Platform: [**Snapshot Page**](https://gov.basisdollar.fi/)
- On-Chain: **No**
- Voting Period: **~3 Days** (Not enforced)
- Proposal Threshold: **50000 BSDS** of BSDS LPs in BSDS/DAI and BSDS/USDC, or BSDS stakers in Seigniorage Stake
- Voting Quorum: **None**
