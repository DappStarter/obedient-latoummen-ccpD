require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember method inner knife forget surge'; 
let testAccounts = [
"0x964c38a6bbb517bdb4e88267902bae2819c95338536d44220c6afff732b74f2b",
"0x72137cbe968be7de36e0db800fbabd1e9aa83920f49d9a69b49318e794c75001",
"0x512f9a4217d4635c7d77537b8bd70e6efcae3493346736ac10474e5dab531191",
"0xac6f7dcc719c45556ee98ef810a726fd47cd44f6b0aac962de38b4de3eb3e9b7",
"0xb62f52dff2a67d87957e2cd46d8d85c0cf82d47b6debaa5913f901d5f301c076",
"0xba35d5d972833d799a5710d08f31bea193f47e31ecb5cb864cfd77654e69d513",
"0x7acf3831148f898cbe39b299a44f7c4110e12818f8e042738f4b08e5b309bed9",
"0x27d19024ad22460b2de1f8083ffe6205e52420735ec92456566dff1f5c78a138",
"0x9e051a68a38d845ce2f18b17fbf3a1032ea36413856dbd0cfacc857e149b847c",
"0x4635242dc07939ca60b9041d895b33843d53054a89b5f455289415a0d3a6c2dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

