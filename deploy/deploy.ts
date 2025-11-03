import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedMentalHealthSurvey = await deploy("MentalHealthSurvey", {
    from: deployer,
    log: true,
  });

  console.log(`MentalHealthSurvey contract: `, deployedMentalHealthSurvey.address);
};
export default func;
func.id = "deploy_mentalHealthSurvey"; // id required to prevent reexecution
func.tags = ["MentalHealthSurvey"];

