<template>
  <div class="Qae relative overflow-y-auto bg-theme-feature rounded-lg">
    <div
      class="Qae--gradient-top sticky pin-t h-10"
      style="text-align:center; background-color:#262262;"
    />

    <div class="container pb-5" style="text-align:center; background-color:#262262;">
      <div>
        <img src="@/assets/images/qae/altilly.png" />

        <div>
          <div
            class="pb-5"
            style="color:#fff; font-style:italic; font-weight:bold;"
          >Next Generation Crypto-Asset Exchange</div>
          <div class="container">
            <div
              id="listing"
              class="altilly-button altilly-button:enabled:hover flex items-center justify-center"
              style="margin:5px; padding:5px;"
              @click="electron_openExternal(freelisting)"
            >
              <b>Explore Markets</b>
            </div>
            <div
              id="listing"
              class="altilly-button altilly-button:enabled:hover flex items-center justify-center"
              style="margin:5px; padding:5px;"
              @click="electron_openExternal(freelisting)"
            >
              <b>Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMarketEnabled && isChartEnabled">
      <MarketChart :period="period" :is-expanded="isChartExpanded">
        <MarketChartHeader class="mb-5" @period-change="onPeriodChange" @toggle="toggleChart" />
      </MarketChart>
    </div>

    <div class="container pb-5" style="text-align:center; background-color:#262262;">
      <div class="container">
        <div class="flex items-center justify-center">
          <h4 style="color:#fff;">Hot Markets:</h4>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/BTC</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/ETH</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/USDT</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/LTC</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/BCH</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/PAX</b>
        </div>
        <div
          id="listing"
          class="markets-button markets-button:enabled:hover flex items-center justify-center"
          style="margin:5px; padding:5px;"
          @click="electron_openExternal(freelisting)"
        >
          <b>XQR/ARK</b>
        </div>
      </div>
    </div>

    <div class="card pt-5 pb-5" style="text-align:center;">
      <h2 style="text-align:center;">
        <b>Home of Qredit</b>
      </h2>
      <br />Altilly is the home of the Qredit currency. You no longer have to convert your asset for Bitcoin, Ethereum or Tether to start trading.
      <br />Altilly allows you to trade Qredit as the base currency with over 200 markets.
      <br />
      <div class="flex flex-row pb-6 mb-2 border-b border-dashed border-theme-line-separator"></div>
      <div class="container">
        <div class="no-border" style="max-width:100%;">
          <h3 style="text-align:center;">
            <b>The Unique Features of Altilly</b>
          </h3>
          <br />
          <div class="container">
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>Multiple Basemarkets</b>
              </h4>TextMissing
              <br />TextMissing
            </div>
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>Zero-fee Mining</b>
              </h4>
              <span>
                Altilly has its own Zero Fee Mining Pools.
                <br />Mine directly to your Altilly Wallet(s) without paying any fees!
              </span>
            </div>
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>OTC Trading</b>
              </h4>TextMissing
              <br />TextMissing
            </div>
          </div>

          <div class="container">
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>Initial Exchange Offerings</b>
              </h4>Present your project to large number of Altilly customers and ger help with raising the initial funding.
              <br />IEO's on Altilly are customizable to your needs and preferences.
            </div>
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>AltillyPass</b>
              </h4>AltillyPass is an optional verification and membership program.
              <br />There are multiple benefits for AltillyPass holders, including higher daily withdrawal limits, access to member only airdrops and discounts for Voyager Park.
            </div>
            <div class="no-border" style="max-width:100%;">
              <h4 style="text-align:center;">
                <b>Trading Competitions</b>
              </h4>TextMissing
              <br />TextMissing
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DashboardTransactions } from "@/components/Dashboard";
import { MarketChart, MarketChartHeader } from "@/components/MarketChart";
import store from "@/store";

export default {
  name: "altilly",
  data: () => ({
    docs: "http://docs.qredit.network/qae/qae-documentation.html",
    freelisting: "https://www.altilly.com/page/addasset",
    createtoken: "http://docs.qredit.network/qae/token-interaction.html"
  }),
  created() {
    this.text = this.any;
  },
  components: {
    MarketChart,
    MarketChartHeader
  },

  computed: {
    isMarketEnabled() {
      return (
        this.session_network &&
        this.session_network.market &&
        this.session_network.market.enabled
      );
    },
    currency() {
      return this.$store.getters["session/currency"];
    },
    price() {
      return this.$store.getters["market/lastPrice"];
    },
    ticker() {
      return this.session_network.market.ticker;
    },
    isChartEnabled() {
      return this.marketChartOptions.isEnabled;
    },
    isChartExpanded() {
      return this.marketChartOptions.isExpanded;
    },
    period() {
      return this.marketChartOptions.period;
    },
    marketChartOptions: {
      get() {
        return this.$store.getters["session/marketChartOptions"];
      },
      set(options) {
        this.$store.dispatch("session/setMarketChartOptions", options);

        this.$store.dispatch("profile/update", {
          ...this.session_profile,
          marketChartOptions: options
        });
      }
    }
  },

  methods: {
    toggleChart(value) {
      this.marketChartOptions.isExpanded = value;
    },

    onPeriodChange(period) {
      this.marketChartOptions.period = period;
    }
  }
};
</script>

<style>
.no-border {
  margin: 10px;
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
}

div.card {
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 5px;
}

div.card-flex {
  width: 75%;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 5px;
  background: #d22d3d;
  color: #fff;
}

.card-flex:hover {
  background-color: #750712;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #8e94c108;
}

.altilly-button {
  background-color: #625e99;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  width: 216px;
  height: 44px;
  border-radius: 3px;
  color: #fff;
  border: 1px solid;
}

.altilly-button:hover {
  background-color: #337ab7;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  width: 216px;
  height: 44px;
  border-radius: 3px;
  color: #fff;
  border: 1px solid;
}

.markets-button {
  background-color: #2d2e69;
  font-weight: 150;
  border-radius: 3px;
  color: #fff;
}

.markets-button:hover {
  background-color: #337ab7;
  font-weight: 150;

  border-radius: 3px;
  color: #fff;
}

.bg-altilly-feature {
  background: #fff;
}

.white-card {
  background-color: #fff;
  color: #3b4559;
}

.explore-button {
  background-color: #262262;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  width: 216px;
  height: 44px;
  border-radius: 3px;
  color: #fff;
  border: 1px solid;
}

.explore-button:hover {
  background-color: #337ab7;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  width: 216px;
  height: 44px;
  border-radius: 3px;
  color: #fff;
  border: 1px solid;
}
</style>
