require('babel-register');
require('babel-polyfill');

//const HDWalletProvider = require('@truffle/hdwallet-provider');
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();

const { mnemonic } = require("./secrets.json");
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "192.168.11.6",
      port: 7545,
      network_id: "*" // Match any network id
    },
    matic_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://matic-mumbai.chainstacklabs.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.infura.io/v3/74d14489a6bc4585bb293f9fb11cc68c`),
      network_id: 80001,
      confirmations: 2,
      // networkCheckTimeout: 10000,
      timeoutBlocks: 4000,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
