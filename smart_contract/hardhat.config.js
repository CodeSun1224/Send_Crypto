// https://eth-goerli.g.alchemy.com/v2/1wIlOdoXbaHHsTsH56bzVzTMzUiK6It9
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/1wIlOdoXbaHHsTsH56bzVzTMzUiK6It9',
      accounts: ['7648f9570f613d161a4017e4a34005b53f713535085e6222aeaf306191489159']
    }
  }
}