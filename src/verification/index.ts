import * as github from "./github";
import * as truffle from "./truffle";
import * as rpc from "./rpc";
import path from "path";
import fs from "fs";
import { verifyByteCode } from "./verify";
import { arrayify } from "@ethersproject/bytes";
import cbor from "cbor";
import { execSync } from "child_process";

function getBytecodeAndMetadata(bytecode) {
  const buff = Buffer.from(arrayify(bytecode));
  const length = buff.readIntBE(buff.length - 2, 2);
  const metadata = cbor.decode(buff.slice(buff.length - length - 2, buff.length - 2));
  const runtimeBytecode = buff.slice(0, buff.length - length - 2);
  return {
    metadata,
    runtimeBytecode,
  };
}

export const codeVerification = async ({ contractAddress, abi, chain }) => {
  const taskId = contractAddress;
  // const directory = path.join(__dirname, "../../", taskId);

  try {
    // todo validate address SDK hmy isAddress
    // todo validate if folder already exist

    console.log("New task", { taskId });

    console.log("Getting actual bytecode from the blockchain...");
    const actualBytecode = await rpc.getSmartContractCode(chain, contractAddress);

    const {  runtimeBytecode } = getBytecodeAndMetadata(actualBytecode);

    const { deployedBytecode } = JSON.parse(fs.readFileSync(abi, "utf-8"));
    const res = getBytecodeAndMetadata(deployedBytecode);

    const verified = runtimeBytecode.equals(arrayify(res.runtimeBytecode));
    console.log("Verified:", verified);

    return {
      verified,
    };
  } catch (error) {
    console.log(error);
    return {
      verified: false,
      error,
    };
  }
};
