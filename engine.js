name: MONEY_BLASTER_AI
on:
  schedule:
    - cron: '*/30 * * * *'
  workflow_dispatch:

jobs:
  blast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Opportunity Hunter
        run: |
          node engine.js > output.svg
      - name: Archive Digital Assets
        uses: actions/upload-artifact@v4
        with:
          name: Generated-Art-${{ github.run_number }}
          path: output.svg
