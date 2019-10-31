<template>
  <div class="Qae relative overflow-y-auto bg-theme-feature rounded-lg">
    <div class="Qae--gradient-top sticky pin-t h-10" />
    <div></div>
    <div style="text-align:center;">
      <img src="@/assets/images/qae/qae.png" />
    </div>
    <div class="container">
      <div class="card" style="min-height: 200px; max-width:30%;">
        <br />
        <br />
        <h2>
          <b>Welcome to QAE</b>
        </h2>
        <br />
        <b>QAE</b> is Qredits Smart Contracts protocol, also known as
        <b>'Qredit Always Evolving'</b> built on the Qredit Blockchain.
        <br />Whether you are a developer, company or an individual, with QAE you can create your own digital asset for many different purposes.
        <br />QAE comes in 3 different tastes for easy integration for your project.
        <br />
        <br />

        <b>Issue your first QAE Smart Contract!</b>

        <br />Head over to your preferred wallet from the wallets menu and click on 'Tokens/QAE' to create or send tokens on the Qredit Blockchain.
        <br />
        <br />

        <b>Qredit and QAE Documentation</b>
        <br />For software developers, exchanges and blockchain enthusiasts, we have created a documentation website with more information.
        Click on the button below to view the docs!
        <br />
        <br />
        <div class="container">
          <div
            id="createtoken"
            class="blue-button blue-button:enabled:hover flex items-center justify-center"
            style="padding:5px;"
            @click="electron_openExternal(createtoken)"
          >
            <b>How to create token</b>
          </div>
          <div
            id="docs"
            class="blue-button blue-button:enabled:hover flex items-center justify-center"
            style="padding:5px;"
            @click="electron_openExternal(docs)"
          >
            <b>Documentation</b>
          </div>
        </div>
        <div class="container pt-2">
          <span>
            <b>Want to deploy your own Blockchain instead?</b>
          </span>
        </div>
        <div class="container pb-2">
          <span>Click on the button below to learn more about our Valkyrie Program.</span>
        </div>
        <div class="container">
          <div
            class="blue-button blue-button:enabled:hover flex items-center justify-center"
            style="padding:5px;"
            @click="electron_openExternal(valkyrie)"
          >
            <b>Click here!</b>
          </div>
        </div>
      </div>
      <div class="card" style="min-height: 200px; max-width:70%;">
        <table>
          <tr>
            <th>Transaction Type</th>
            <th>Description</th>
            <th style="text-align:center;">QAE-1</th>
            <th style="text-align:center;">QAE-2</th>
            <th style="text-align:center;">QAE-3</th>
          </tr>
          <tr>
            <td>Genesis</td>
            <td>Create a new token</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Burn</td>
            <td>Destroy/Burn tokens from a contract</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Mint</td>
            <td>Create/Mint tokens into an existing contract *</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Send</td>
            <td>Send tokens from sender address to recipient address</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Pause</td>
            <td>Pause the contract. Prevents any calls other than RESUME *</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Resume</td>
            <td>Resume the contract *</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>New Owner</td>
            <td>Change the owner of the contract *</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Custom Contract</td>
            <td>Add metadata or create contracts with different coding languages</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/minus.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>Reverse TX</td>
            <td>Reverse transactions or retrieve tokens to the owner *</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/minus.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/minus.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
          <tr>
            <td>IPFS</td>
            <td>InterPlanetary File System</td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/minus.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/minus.png" />
            </td>
            <td style="text-align:center;">
              <img src="@/assets/images/qae/checked.png" />
            </td>
          </tr>
        </table>
        <h4>QAE-2 and QAE-3 will be available in early 2020.</h4>
      </div>
    </div>
    <div class="flex flex-row pb-2 mb-2 border-b border-dashed border-theme-line-separator"></div>
    <div style="text-align:center;">
      <b>Limited offer!</b> All
      <b>QAE</b> assets are allowed to be listed for
      <b>free</b> on the Altilly Exchange!
      <br />As long as it meets the basic listing requirements.
    </div>
    <div
      id="listing"
      class="blue-button blue-button:enabled:hover flex items-center justify-center"
      style="margin:5px; padding:5px;"
      @click="electron_openExternal(freelisting)"
    >
      <b>Click here to apply for free exchange listing!</b>
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
