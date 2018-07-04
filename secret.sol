pragma solidity ^0.4.0;
contract Secret {

    string secretKey;

    function setSecretWord(string _secretKey) public {
        secretKey = _secretKey;
    }

    function getSecretWord() public constant returns (string) {
        return (secretKey);
    }

}
