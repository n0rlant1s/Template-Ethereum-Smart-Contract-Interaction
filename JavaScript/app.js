var Web3 = require('web3');

window.App = {
	instance: "No instance has been initiated, yet.",
	network: "No network connected yet.",

  start: function(){
    let self = this

    self.fetchAccount()
    .then(function(account){

      $(document).on('click', '#getSecretWord', (event) => { // This is where you click to get the secret word //
        App.getSecretWord(account) // Allows you to fetch the "getSecretWord" function from the smart contract //
      });

			$(document).on('click', '#setSecretWord', (event) => { // This is where you set the secret word
				let input = document.getElementById("newSecretWord").value; // This function allows you to put in a new secret word every time
				App.setSecretWord(account,input) // Allows you to fetch the "setSecretWord" function from the smart contract
      });

      return account
    })


  },

  fetchAccount: function(){
    let self = this;

    return new Promise(function(res, rej){

      // Get the initial account balance so it can be displayed.
      web3.eth.getAccounts(function(err, accounts) {
        if (err != null) {
          rej("There was an error fetching your accounts.")
        }

        if (accounts.length == 0) {
          rej("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        }

        // resolve with account
        res(accounts[0])

      });
    })
  },

  getSecretWord: function(account) { // Function for getting the Secret Word //
    let self = this;

    let SecretWord = new Promise(function(resolve, reject){
      self.instance.getSecretWord({from: account}, function(err, res){
        resolve(res)
      })
    })

    Promise.resolve(SecretWord)
    .then(function(string){
			document.getElementById("secretWordOutput").innerHTML = " >>>>> " + string;
    })
  },

  setSecretWord: function(account, input) { // Function for setting the secret word //
		let self = this;

		let SecretWord = new Promise(function(resolve, reject){
      self.instance.setSecretWord(input, {from: account}, function(err, res){
        resolve(res)
      })
    })

    Promise.resolve(SecretWord)
    .then(function(string){
			console.log("setting the new secret word to: '"+input+"'"); // Showing the secret word in console //
    })
  }

};


window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);

    web3.version.getNetwork((err, netId) => {

      switch (netId) {

        // NetId = 1 is Ethereum Main Net

        /*
        case "1":
          console.warn('You are using the Ethereum Main Network')
          var abi = // PASTE ABI HERE
          var SharesContract = web3.eth.contract(abi);
          var contractAddress = // PASTE 'CONTRACT' HERE
          var instance = SharesContract.at(contractAddress);
          App.instance = instance;
          App.network = 1;
          App.start();
          break
        */

        // NetId = 3 is Ropsten Test Net
        case "3":
          console.warn('You are using the Ropsten Test Network.')
          var abi = [
            	{
            		"constant": false,
            		"inputs": [
            			{
            				"name": "_secretKey",
            				"type": "string"
            			}
            		],
            		"name": "setSecretWord",
            		"outputs": [],
            		"payable": false,
            		"stateMutability": "nonpayable",
            		"type": "function"
            	},
            	{
            		"constant": true,
            		"inputs": [],
            		"name": "getSecretWord",
            		"outputs": [
            			{
            				"name": "",
            				"type": "string"
            			}
            		],
            		"payable": false,
            		"stateMutability": "view",
            		"type": "function"
            	}
            ]
          var SharesContract = web3.eth.contract(abi); // Variable storing the ABI
          var contractAddress = '0x716dad17b7c672fbde48b87f7c6d22444555ea91'
          var instance = SharesContract.at(contractAddress);
          App.instance = instance;
          App.network = 3;
          App.start();
          break
        default:
          console.warn('This is an unknown network. Please switch to either the Ropsten Test Network or the Ethereum Main Network.')
      }
    })

  } else {
    console.warn("No web3 detected.");
  }

});
