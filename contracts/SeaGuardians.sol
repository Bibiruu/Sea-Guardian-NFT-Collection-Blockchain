// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SeaGuardians is ERC1155, Ownable {

    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;
    address initialOwner = msg.sender;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseUri
    )
        ERC1155(_baseUri) 
        Ownable(msg.sender)
    {
        name = _name;
        symbol = _symbol;
        baseUri = _baseUri;
    }
   
    // amount = number of copies in minting
    function mint(uint256 amount)
        public
        onlyOwner
    {
        tokenCount += 1;
        _mint(msg.sender, tokenCount, amount, "");
    }

    // OPENSEA standard
    //abi.encodePacked concatenates the multiple pieces of data baseuri+tokenid into json. 
    //Example: If _tokenId is 1, this converts it to "1"
    //RESULT:"https://example.com/item/1.json"
    function uri(uint256 _tokenId) override public view returns (string memory) {
        return string(
            abi.encodePacked(
                baseUri,
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }
}
