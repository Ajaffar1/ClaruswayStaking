
const hre = require("hardhat");

async function main() {


  
  const ClaruswayNFTNFT = await hre.ethers.getContractFactory("");
  const ClaruswayNFT = await ClaruswayNFT.deploy();

  await ClaruswayNFT.deployed();

  console.log("ClaruswayNFT deployed to:", ClaruswayNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
