# Template to interact with deployed smart contract on ethereum's blockchain
*this project specifically will only run on the ropsten test net, any smart contract deployed on other test nets will need to be added to the switch function at the bottom of app.js*


### Get Started
1. Clone Repository
2. cd To Repository
3. Run `npm install`
4. Run local server: `npm run dev`

Once up and running you there are 2 functions to interact with of the smart contract
- `setGreeting`: Let's you store any greeting string
- `callGreeting`: Retrieves the latest greeting string stored

### Notes
- Greeting.sol is included in the repo to have a look at what the smart contract we are interacting with looks like. This file is, however, not needed to interact with the smart contract on any of the ethereum networks as this template is specifically for contracts that are deployed already. In our case I have deployed Greetings.sol on the Ropsten Test Net and it can be found here: https://ropsten.etherscan.io/address/0x72c334893ab0493debf4eac516ee70a59244aec3

