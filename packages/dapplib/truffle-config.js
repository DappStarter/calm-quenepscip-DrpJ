require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket razor ridge puppy inflict brave foster gaze'; 
let testAccounts = [
"0x9ee0369aa83444c00ebc055173e3d3afb3c79a4adb7aeb818452ab1628eb4030",
"0x7379266b08259935c01b7f8fa30ae7c7f5fb5735623fbaaa12b266384259ae19",
"0x40a8909111f191df16246276564efe841e2d07ba9dee375207a1348f47529369",
"0xd7755fa388bfff0a285cb17470fb4f9d80b84d278f7618955515d4398c07eaa9",
"0xc46a02ba33a87352e5cf36312543d801fe2db02fada0b3d43ceed3125c914ca6",
"0x90cdafde95d37729736ace69aed29af567a3fb9af06a08ac25e5438f7c879106",
"0x8d8cf15db9dd6d8fc96ec314a7d53fc1dc3da5320fcb5d4b15e29debd855e8db",
"0xe2884129b78f2baeef1e82ff7fc586b78c0e1b6949ccab126017f663f5eeb3b8",
"0x60be3ecf88818bcb605db76fc425ad73f8e4f7dae6a35c3a80a124f97815c341",
"0x0cdebd717d5499edf64ad56622a8e2533bf23135cb801154a292df449529531d"
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

