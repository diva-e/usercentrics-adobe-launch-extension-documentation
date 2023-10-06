---
sidebar_label: 'Consent Given'
sidebar_position: 1
description: ''
---

# Consent Given

Based on the mappings configured in the extension’s configuration page, the condition evaluates to `true` if at least one of the selected services has changed its consent to "consent given".

:::caution Please Note

There is a distinction by which event this condition was triggered.

:::

* **Case 1**: The condition was triggered by the "Usercentrics: Consent Update" event. In this case, the consent must actually change from "Revoked" to "Given" so that the condition evaluates to `true`.
* **Case 2**: The condition is triggered by any other event. If this is the case, it is only checked whether the current consent status is set to "Given" so that the condition evaluates to `true`.

![consent_given.png](./img/consent_given.png)
