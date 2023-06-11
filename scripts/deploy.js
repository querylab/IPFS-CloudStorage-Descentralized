async function main() {

  const [deployer] = await ethers.getSigners();

  const storage = await ethers.getContractFactory("IPFSCloud");

  // Start deployment, returning a promise that resolves to a contract object
  const cloudstorage= await storage.deploy();// change the 90 minutes duration of the contract if you want to make the account to last longer



//Consol View
console.log("***********************************************************************************");
console.log("Deploying contracts with the account:", deployer.address);
console.log("Account balance:", (await deployer.getBalance()).toString());
console.log("***********************************************************************************\n");
console.log("CloudStorage Contract Address\n ");
console.log(cloudstorage.address,"\n");
console.log("***********************************************************************************");



}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });