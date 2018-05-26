var erc = artifacts.require("./erc721.sol");
var ownable = artifacts.require("./ownable.sol");
var safemath = artifacts.require("./safemath.sol");
var zombieattack = artifacts.require("./zombieattack.sol");
var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");
var zombiehelper = artifacts.require("./zombiehelper.sol");

module.exports = function(deployer) {
  deployer.deploy(ownable);
  deployer.deploy(safemath);
  deployer.deploy(zombieattack);
  // deployer.deploy(zombiefactory);
  // deployer.deploy(zombiefeeding);

};
