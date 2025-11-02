import { task } from "hardhat/config";

task("mentalHealthSurvey", "Prints MentalHealthSurvey contract address", async (taskArgs, hre) => {
  try {
    const deployment = await hre.deployments.get("MentalHealthSurvey");
    console.log("MentalHealthSurvey contract address:", deployment.address);
  } catch (e) {
    console.error("MentalHealthSurvey contract not deployed. Run 'npx hardhat deploy' first.");
  }
});

