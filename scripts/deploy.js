const { ethers } = require("hardhat");

async function main() {

    // Get the signer (deploying account)
    const [ deployer ] = await ethers.getSigners();
    console.log("Deploying signers", deployer.address);
    //.sol contract name precisely
    const BlueSiren = await ethers.getContractFactory("BlueSirenERC1155");
    //deployed version of contract, name & symbol
    const blueSiren = await BlueSiren.deploy("Blue Siren Collectibles", "BSNFT");
    
    //mint, copying the CID .json file
    await blueSiren.mint(5, "https://ipfs.io/ipfs/bafkreibdjmlx7n664tci5i26obd4ooj7lrvf66ca6h7rzdmwqvocy67hvu");
    console.log("Congratulations, Blue Siren NFT successfully minted!")
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

