// const fs = require("fs"); // Core Module
// const cetakNama = require("./coba"); // local Module
// const moment = require("moment"); // third party module / npm module / node_modules

const coba = require("./coba"); // local Module
console.log(
  coba.cetakNama("Will"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
console.log("Hello Will");
