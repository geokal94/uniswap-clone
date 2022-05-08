
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/egO73XymcHZm-Lqk2GxZJ9-G272ZfU5n',
      accounts: [
        'e3ae3578de21dc7dbba001c8c40213e512d7ff739a312e3e8e73dd213060efad',
      ],
    },
  },
}