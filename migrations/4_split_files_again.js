var zombiehelper = artifacts.require("./zombiehelper.sol");
var zombieownership = artifacts.require("./zombieownership.sol");
var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");

const util = require("util");
const fs = require("fs");
const path = require("path");

module.exports = async function(deployer) {
  await deployer.deploy(zombiefactory);
  await deployer.deploy(zombiehelper);

  const addresses = {
    zombieFactoryAddress: zombiefactory.address,
    zombieHelperAddress: zombiehelper.address
  };

  fs.writeFile(
    path.join(__dirname, "..", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};
