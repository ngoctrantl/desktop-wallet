<template>
  <div class="Qae relative overflow-y-auto bg-theme-feature rounded-lg">
    <div class="Qae--gradient-top sticky pin-t h-10" />
    <div></div>
    <div style="text-align:center;">
      <img src="@/assets/images/qae/motion.png" />
    </div>
    <div class="container">
      <div class="card" style="min-height: 200px; max-width:75%;">
        <br />
        <br />
        <h2>
          <b>This is Qredit Motion.</b>
        </h2>
        <br />With Qredit Motion you will be able to convert your Qredit coins directly to fiat currency and vice versa, straight from out of your wallet.
        <br />Qredit Motion uses the Altilly Exchange and 3rd party services to convert your assets with click a on a button.
        <br />Optionally, you can register your Qredit address with our Persona KYC program.
        <br />With Persona, you will have full control over your private and sensitive contracts, documents and government ID's.
        <br />

        <br />
        <h5>Qredit Motion and the Persona Zero-knowledge Identity Management System is currently under development and is expected to be released in early 2020.</h5>
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
