---
title: SS58 registry is outdated
labels: ['ci', '@networks']
---

cc @axia-js/notifications

Discrepancies detected between https://github.com/axiatech/axlib/blob/master/ss58-registry.json and https://github.com/axia-js/common/blob/master/packages/networks/src/axlib.ts

Check the nightly cron output (or via `yarn networks:crosscheck` locally) and run `yarn networks:sync` to update. The output as found from the test includes:
