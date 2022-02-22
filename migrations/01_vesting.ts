import storage from "../storage/vesting";
import { TezosToolkit } from "@taquito/taquito";
import config from "../config";
import { migrate } from "../scripts/commands/migrate/utils";
import { NetworkLiteral, TezosAddress } from "../utils/helpers";

module.exports = async (tezos: TezosToolkit, network: NetworkLiteral) => {
  const contractAddress: TezosAddress = await migrate(
    tezos,
    config.outputDirectory,
    "vesting",
    storage,
    network
  );
  console.log(`Example contract address: ${contractAddress}`);
};
