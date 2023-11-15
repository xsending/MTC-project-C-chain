const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const Degen = await hre.ethers.getContractFactory("DegenToken");

  const initialAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Deploy it
  const degen = await Degen.deploy(initialAddress);
  await degen.waitForDeployment();

  // Display the contract address
  console.log(`Points token deployed to ${degen.target}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
