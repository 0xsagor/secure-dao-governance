const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // 1. Deploy Token
  const Token = await hre.ethers.getContractFactory("GovToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  // 2. Deploy Timelock (min delay 2 days)
  const Timelock = await hre.ethers.getContractFactory("TimelockController");
  const timelock = await Timelock.deploy(172800, [], [], deployer.address);
  await timelock.waitForDeployment();

  // 3. Deploy Governor
  const Governor = await hre.ethers.getContractFactory("DAOContract");
  const gov = await Governor.deploy(await token.getAddress(), await timelock.getAddress());
  await gov.waitForDeployment();

  console.log("DAO Stack Deployed:");
  console.log("- Token:", await token.getAddress());
  console.log("- Timelock:", await timelock.getAddress());
  console.log("- Governor:", await gov.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
