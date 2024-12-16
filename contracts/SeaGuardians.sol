// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ERC1155Burnable} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import {ERC1155Pausable} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import {ERC1155Supply} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract SeaGuardians is ERC1155, Ownable {

    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 memory _baseUri
    )
        ERC1155(baseUri)  {
            name = _name;
            symbol = _symbol;
            baseUri = _baseUri;
        }
   

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    /*function pause() public onlyOwner {
        _pause();
    }*/

    /*function unpause() public onlyOwner {
        _unpause();
    }*/

    function mint(uint256 amount)
        public
        onlyOwner
    {
        tokenCount += 1;
        _mint(msg.sender,tokenCount, amount, "");
    }

    function uri(uint256 _tokenId) override public view returns(string memory) {
        return string (
            abi.encodePacked(
                baseUri,
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }

    /*function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }*/

    // The following functions are overrides required by Solidity.

    /*function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable, ERC1155Supply)
    {
        super._update(from, to, ids, values);
    }*/
}



