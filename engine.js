name: MONEY_BLASTER_AI
on:
  workflow_dispatch:
jobs:
  blast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Generate Asset
        run: node engine.js
      - name: Upload Proof
        uses: actions/upload-artifact@v4
        with:
          name: Digital-Asset-Proof
          path: output.svg
          retention-days: 1
