// var zombiehelper = artifacts.require("./zombiehelper.sol");
// var zombieownership = artifacts.require("./zombieownership.sol");
// var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");
// 
// const util = require("util");
// const fs = require("fs");
// const path = require("path");
// console.log(JSON.stringify(util));
// const writeFile = util.promisify(fs.writeFile);
module.exports = function(deployer) {
  // const zombieHelper = await deployer.deploy(zombiehelper);
  // try {
  //   const test = deployer.deploy(zombiehelper);
  //   console.log('done')
  // } catch(e) {
  //   console.log(e)
  // }
  // console.log('hey')
  // const addresses = {
  //   tokenAddress: zombieHelper.address
  // };
  // console.log('ho')
  // // deployer.deploy(ownable);
  // // deployer.deploy(safemath);
  // // deployer.deploy(zombieattack);
  // deployer.deploy(zombiefactory);
  deployer.deploy(zombiefeeding);
  // deployer.deploy(zombieownership);
  // fs.writeFile(
  //   path.join(__dirname, "..", "app", "addresses.json"),
  //   JSON.stringify(addresses)
  // );
};
