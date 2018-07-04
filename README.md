# Template to interact with deployed smart contract on ethereum's blockchain
This template allows a user to (a) utilise a smart contract template that can be deployed on Ethereum's blockchain, (b) connect the smart contract to a local repository, (c) interact with the smart contract through a frontend, and (d) customize frontend whilst still being connected to the smart contract. 

- (a): `Secret.sol`: Smart contract written in Solidity with two simple functions
- (b): `app.js`: Interacting with the smart contract on Ethereum's blockchain - change two variables to add your own contract once you have deployed it.
- (c): `app.js` and `index.html`: Intuitive and simple interaction between the html (frontend) and JavaScript (using web3.js to interact with the smart contract)
- (d): `index.css`: Simple CSS to customize the website

### Get Started
1. Clone Repository
2. cd To Repository
3. Run `npm install`
4. Run local server: `npm run dev`
5. Edit changes to the template in a code editor. Changes are automatically shown on localhost. 

### The smart contract
This repository is connected to a deployed contract on Ropsten Test Network. The smart contract in this repository [Secret.sol] is simply included as a smart contract template. To add your own contract:

1. Use the smart contract in this repository as your template
2. Go to Remix IDE (https://remix.ethereum.org/) and try interacting with the template to check that everything works
3. Deploy the contract 
4. Go to [app.js] and change the `ABI` and `var contractAddress`

### Secret.sol
Our template contract is written in Solidity and has two main funcitons:
- `setSecretWord` allows the user to set "a secret word"
- `getSecretWord`: retrieving the latest "secret word"

### Please read:
1. You need MetaMask for this template as it is injecting the web3
2. If you are using the pre-made template, remember switching to "Ropsten Test Network" on MetaMask
3. Don't have Ether on your Ropsten Account? Use Faucet (https://faucet.metamask.io/)
