pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";

contract ZombieFactory is Ownable {

  using SafeMath for uint256;

  event NewZombie(uint zombieId, string name, uint dna);
  event NewSampleZombie(uint zombieId, string name, uint dna);
  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;
  uint cooldownTime = 1 days;

  struct Zombie {
    string name;
    uint dna;
    uint32 level;
    uint32 readyTime;
    uint16 winCount;
    uint16 lossCount;
  }

  struct Blake {
    string name;
  }

  struct SampleZombie {
    string name;
    uint dna;
    uint32 level;
    uint32 readyTime;
    uint16 winCount;
    uint16 lossCount;
  }

  Zombie[] public zombies;
  Blake[] public blakes;
  SampleZombie[] public samplezombies;

  mapping (uint => address) public zombieToOwner;
  mapping (address => uint) ownerZombieCount;

  function _createZombie(string _name, uint _dna) internal {
    uint id = zombies.push(Zombie(_name, _dna, 1, uint32(now + cooldownTime), 0, 0)) - 1;
    zombieToOwner[id] = msg.sender;
    ownerZombieCount[msg.sender]++;
    uint anotherId = samplezombies.push(SampleZombie(_name, _dna, 1, uint32(now + cooldownTime), 0, 0)) - 1;
    emit NewSampleZombie(id, _name, _dna);
    emit NewZombie(id, _name, _dna);
  }

  function createBlake(string _name) public {
    blakes.push(Blake(_name));
  }

  function howManyBlakes() public view returns (uint) {
    return blakes.length;
  }

  function _generateRandomDna(string _str) private view returns (uint) {
    uint rand = uint(keccak256(_str));
    return rand % dnaModulus;
  }

  function howManySampleZombies() public view returns (uint) {
    return samplezombies.length;
  }

  function howManyZombies() public view returns(uint) {
    return zombies.length;
  }

  function createRandomZombie(string _name) public {
    /* require(ownerZombieCount[msg.sender] == 0); */
    uint randDna = _generateRandomDna(_name);
    randDna = randDna - randDna % 100;
    _createZombie(_name, randDna);
  }

}
