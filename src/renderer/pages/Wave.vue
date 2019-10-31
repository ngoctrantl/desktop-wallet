<template>
  <div class="Qae relative overflow-y-auto bg-theme-feature rounded-lg">
    <div class="Qae--gradient-top sticky pin-t h-10" />
    <div></div>
    <div style="text-align:center;">
      <img src="@/assets/images/qae/wave.png" />
    </div>
    <div class="container">
      <div class="card" style="min-height: 200px; max-width:75%;">
        <br />
        <br />
        <h2>
          <b>This is Qredit Wave.</b>
        </h2>
        <br />Qredit Wave allows you to program any NFC device like your phone, NFC bracelets, NFC stickers and NFC cards to receive Qredit coins and QAE tokens directly in to your Desktop, Mobile, Web, Paper and Exchange wallet.
        <br />Even without internet from the consumer side.
        <br />
        <h5>Qredit Wave is currently under development and is expected to be released in early 2020.</h5>
        <br />You can already order the AltillyPass on the Altilly Exchange.
        <br />Once Qredit Wave has been released, it will be directly available to all AltillyPass owners.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "url",
  data: () => ({
    docs: "http://docs.qredit.network/qae/documentation",
    freelisting: "https://www.altilly.com/page/addasset",
    createtoken: "http://docs.qredit.network/qae/createtoken"
  }),
  created() {
    this.text = this.any;
  }
};
</script>

<style>
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

.blue-button {
  background-color: #d22d3d;
  color: #fff;
}

.blue-button:hover {
  background-color: #750712;
  color: #fff;
}
</style>
