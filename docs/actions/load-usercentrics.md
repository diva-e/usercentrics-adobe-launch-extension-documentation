---
sidebar_label: 'Load Usercentrics'
sidebar_position: 1
description: ''
---

# Load Usercentrics

Loads the Usercentrics (V2) CMP and applies the Usercentrics consents to the ECID opt-in framework if enabled over the extension’s configuration page. 

:::danger Loading order

To ensure that the CMP is loaded first, the order should be set to 1 for the "Library Loaded (Page Top)" event.

:::

![load_cmp.png](./img/load_cmp.png)