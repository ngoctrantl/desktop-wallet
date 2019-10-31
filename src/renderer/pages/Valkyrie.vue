<template>
  <div class="Valkyrie relative overflow-y-auto bg-theme-feature rounded-lg">
    <div style="text-align:center;">
      <img style="max-width:50%;" src="@/assets/images/qae/valkyrie-q.png" />
    </div>
    <div style="text-align:center;">
      <span>
        <h2>
          <b>Welcome to Qredit Valkyrie</b>
        </h2>
      </span>
      <span>Are you looking to deploy your own enterprise-grade Blockchain?</span>
      <br />
      <span>Do you need any help with your QAE project? This is what Valkyrie is all about!</span>
      <br />
      <span>Contact the team of Qredit and we are glad to help you with your project.</span>
    </div>
    <div class="container p-2">
      <div
        class="blue-button blue-button:enabled:hover flex items-center justify-center"
        style="padding:5px; max-width:150px;"
        @click="electron_openExternal(valkyrie)"
      >
        <b>Contact Us</b>
      </div>
    </div>
    <div class="flex flex-row pb-2 mb-2 border-b border-dashed border-theme-line-separator"></div>
    <div class style="text-align:center;">
      <h3>The following companies and projects are already part of our Valkyrie Program.</h3>
    </div>

    <div class="card" style="min-height: 200px; max-width:100%;">
      <table>
        <tr>
          <th>Project</th>
          <th>Industry</th>
          <th style="text-align:center;">Type</th>
          <th style="text-align:center;">Blockchain</th>
          <th style="text-align:center;">Ticker</th>
          <th style="text-align:center;">Links</th>
        </tr>
        <!-- Voyager Park -->
        <tr>
          <td>Voyager Park</td>
          <td>Tourism</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-1)</td>
          <td style="text-align:center;">HODLER</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- Persona -->
        <tr>
          <td>Persona</td>
          <td>KYC</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-3)</td>
          <td style="text-align:center;">XPSN</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- Liberland.info -->
        <tr>
          <td>Liberland.info</td>
          <td>Governance</td>
          <td style="text-align:center;">Coin</td>
          <td style="text-align:center;">Fork</td>
          <td style="text-align:center;">LM</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- Antares Energy -->
        <tr>
          <td>Antares Energy</td>
          <td>Renewable Energy</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-1)</td>
          <td style="text-align:center;">ANTARES</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- Hodler Energy -->
        <tr>
          <td>Hodler Energy</td>
          <td>Mining</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-1)</td>
          <td style="text-align:center;">HODLQ</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- CryptoGuesser -->
        <tr>
          <td>CryptoGuesser</td>
          <td>Gambling</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-1)</td>
          <td style="text-align:center;">CGT</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Trade</b>
            </div>
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
        <!-- Planet4Us -->
        <tr>
          <td>Planet4Us</td>
          <td>Supply Chain</td>
          <td style="text-align:center;">Token</td>
          <td style="text-align:center;">Qredit (QAE-1)</td>
          <td style="text-align:center;">P4U</td>
          <td class="container" style="text-align:center; text-align:-webkit-center;">
            <div
              class="blue-button blue-button:enabled:hover flex items-center justify-center"
              style="margin:2px; padding:2px; max-width:90px;"
              @click="electron_openExternal(voyagerpark)"
            >
              <b>Website</b>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align:center;">
      <h5>Please note. The projects above are part of our Valkyrie Program. We do not endorse or give any advice to invest in these projects.</h5>
      <h5>Please contact the owner of the project for more details.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "url",
  data: () => ({
    valkyrie: "https://qredit.io/valkyrie-deployer",
    arkdeployer: "https://deployer.ark.io",
    persona: "https://persona.im"
  })
};
</script>

<style>
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
div.card {
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 5px;
}

div.card-flex {
  width: 100%;
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

.blue-button {
  background-color: #d22d3d;
  color: #fff;
}

.blue-button:hover {
  background-color: #750712;
  color: #fff;
}

.card-img {
  height: 75px;
  width: 75px;
  margin: 10px;
  text-align: center;
}

.project-img {
  max-height: 34px;
  max-width: 200px;
  margin: 10px;
  text-align: center;
}

div.card-projects {
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 5px;
  background: #a0a0a0;
}

div.card-projects:hover {
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 5px;
  background: #404040;
}
</style>
