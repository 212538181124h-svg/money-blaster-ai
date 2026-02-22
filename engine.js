name: MONEY_BLASTER_AI
on:
  workflow_dispatch:
jobs:
  blast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Generate Asset
        run: node engine.js
      - name: Upload
        uses: actions/upload-artifact@v4
        with:
          name: Digital-Asset-Proof
          path: output.svg
          if-no-files-found: error
