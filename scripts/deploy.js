const { ethers } = require("hardhat");

async function main() {

    // Get the signer (deploying account)
    const [ deployer ] = await ethers.getSigners();
    console.log("Deploying signers", deployer.address);
    //.sol contract name precisely
    const SeaGuardians = await ethers.getContractFactory("SeaGuardians");
    //deployed version of contract, name & symbol
    const seaGuardians = await SeaGuardians.deploy(
        "SeaGuardians Collection", 
        "SGC",
        "https://ipfs.io/ipfs/bafybeicx7alkilnsmne4utqs3kcrsefi2mho4csela3mmlzgmiqdvlku64/",
    );
    
    //mint, copying the CID .json file
    await seaGuardians.mint(8); //1 Mediterranean 
    await seaGuardians.mint(8); //2 Baltic basic
    await seaGuardians.mint(1); //3 Red sea(rare)
    await seaGuardians.mint(8); //4 Mediterranean evolved
    await seaGuardians.mint(8); //5 Black Sea
    await seaGuardians.mint(8); //6 CHina Sea
    await seaGuardians.mint(1); //7 Ocean master/(rare)
    await seaGuardians.mint(1); //8 Baltic Sea(rare)
    console.log("Congratulations, SeaGuardian Collection successfully minted!")
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

