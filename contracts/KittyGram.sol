pragma solidity ^0.4.21;
import "zos-lib/contracts/migrations/Migratable.sol";


contract KittyGram is Migratable {

    //Kitty Memory Format
    struct kittymemory {
        address ownerAtTheTime;
        string ipfsImage;
        string ipfsText;
    }

    //Map Kitty ID to a mapping of Integers to KittyMemory Struct and mapping
    //of how many memories each kitty has
    mapping(uint =>mapping(uint => kittymemory)) public KittyMemories;
    mapping(uint => uint) public KittyMemoryCount;

    //Total Number of Memories Recorded
    uint public totalMemories;
    address public owner;
    //address public ownerOf;


    //Address of CryptoKitties on Rinkby
    //address CryptoKittiesContract = 0x7e5f938e0136F4e5deaA8D6Ea5760aeB9604cb1d;
    //bool public testKittyOwner;


    function initialize (address _owner) isInitializer("KittyGram", "0") public {
        //Should check that Zeppelin updates don't write this to zero again
        totalMemories = 0;
        owner = _owner;
    }

    function pushMemory(uint _kittyID, string _ipfsImage, string _ipfsText) public {
    require(_kittyID != 0);
    require(!isEmptyString(_ipfsImage));
    require(!isEmptyString(_ipfsText));


    //testKittyOwner = CryptoKittiesContract.delegatecall(bytes4(sha3("ownerOf(uint256)")), _kittyID);
    //FakeCryptoKitty fakeCryptoKitty = FakeCryptoKitty(CryptoKittiesContract);
    //ownerOf = fakeCryptoKitty.ownerOf(_kittyID);


    uint currentMemorySlot = KittyMemoryCount[_kittyID] + 1;

    kittymemory memory kittyMemory;
    kittyMemory.ownerAtTheTime = msg.sender;
    kittyMemory.ipfsImage = _ipfsImage;
    kittyMemory.ipfsText = _ipfsText;

    KittyMemories[_kittyID][currentMemorySlot] = kittyMemory;
    KittyMemoryCount[_kittyID] ++;

    totalMemories ++;
    }

    function isEmptyString(string _text) public pure returns (bool){
        bytes memory tempEmptyStringTest = bytes(_text); // Uses memory
        if (tempEmptyStringTest.length == 0) {
            return true;
        } else {
            return false;
        }
    }

}
