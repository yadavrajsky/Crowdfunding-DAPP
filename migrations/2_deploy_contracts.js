const MyContract = artifacts.require("Crowdfunding");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
